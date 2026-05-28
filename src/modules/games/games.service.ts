// src/modules/games/games.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Videojuego } from './interfaces/game.interface';

@Injectable()
export class GamesService {
  private juegos: Videojuego[] = [
    { id: 1, titulo: 'The Legend of Zelda: Tears of the Kingdom', plataforma: 'Nintendo Switch', completado: true },
    { id: 2, titulo: 'Elden Ring', plataforma: 'PC / PS5', completado: false }
  ];

  findAll(): Videojuego[] {
    return this.juegos;
  }

  findOne(id: number): Videojuego {
    const juego = this.juegos.find(j => j.id === id);
    if (!juego) {
      throw new NotFoundException(`El juego con ID ${id} no existe.`);
    }
    return juego;
  }

  create(createGameDto: CreateGameDto): Videojuego {
    const juegoNuevo: Videojuego = {
      id: this.juegos.length > 0 ? Math.max(...this.juegos.map(j => j.id)) + 1 : 1,
      titulo: createGameDto.titulo,
      plataforma: createGameDto.plataforma,
      completado: createGameDto.completado
    };
    this.juegos.push(juegoNuevo);
    return juegoNuevo;
  }

  update(id: number, updateGameDto: UpdateGameDto): Videojuego {
    const juego = this.findOne(id); // Si no existe, este método lanza el error 404
    
    // Modificamos solo las propiedades que el usuario mandó
    if (updateGameDto.titulo !== undefined) juego.titulo = updateGameDto.titulo;
    if (updateGameDto.plataforma !== undefined) juego.plataforma = updateGameDto.plataforma;
    if (updateGameDto.completado !== undefined) juego.completado = updateGameDto.completado;

    return juego;
  }

  remove(id: number): { message: string } {
    const juegoExiste = this.juegos.some(j => j.id === id);
    if (!juegoExiste) {
      throw new NotFoundException(`No se pudo eliminar: El ID ${id} no existe.`);
    }
    this.juegos = this.juegos.filter(j => j.id !== id);
    return { message: `Juego con ID ${id} eliminado correctamente.` };
  }
}