import { Module } from '@nestjs/common';
import { SuperheroesService } from './services/superheroes.service';
import { SuperheroesController } from './controllers/superheroes.controller';

@Module({
  providers: [SuperheroesService],
  controllers: [SuperheroesController]
})
export class SuperheroesModule {}
