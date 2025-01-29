import { Injectable, BadRequestException } from '@nestjs/common';
import { Superhero } from '../models/superhero.model';

@Injectable()
export class SuperheroesService {
  // Temporary in-memory storage
  private superheroes: Superhero[] = [];
  // Keeps track of unique hero IDs
  private idCounter = 1;

  addSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
    // Validate humility score
    if (humilityScore < 1 || humilityScore > 10) {
      throw new BadRequestException('Humility score must be between 1 and 10');
    }

    // Ensure hero names are unique
    if (this.superheroes.some(hero => hero.name.toLowerCase() === name.toLowerCase())) {
      throw new BadRequestException(`Hero "${name}" already exists!`);
    }

    // Create a new superhero
    const newSuperhero: Superhero = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };

    this.superheroes.push(newSuperhero);
    console.log(`Hero added: ${newSuperhero.name} (Power: ${newSuperhero.superpower}, Humility: ${newSuperhero.humilityScore})`);

    return newSuperhero;
  }

  getSuperheroes(): Superhero[] {
    // Sort heroes by humility score (highest first)
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
