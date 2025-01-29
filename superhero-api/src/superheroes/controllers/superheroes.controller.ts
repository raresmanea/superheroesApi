import { Controller, Post, Get, Body } from '@nestjs/common';
import { SuperheroesService } from '../services/superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ) {
    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
