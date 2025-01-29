import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add a superhero', () => {
    const hero = service.addSuperhero('Testing Hero', 'Testing', 5);
    expect(hero.name).toBe('Testing Hero');
  });

  it('should not allow humility score out of range', () => {
    expect(() => service.addSuperhero('Bad Hero', 'Bug Fixing', 15)).toThrow();
  });

  it('should return superheroes sorted by humility score', () => {
    service.addSuperhero('A', 'Flying', 3);
    service.addSuperhero('B', 'Strength', 9);
    const heroes = service.getSuperheroes();
    expect(heroes[0].name).toBe('B');
  });
});
