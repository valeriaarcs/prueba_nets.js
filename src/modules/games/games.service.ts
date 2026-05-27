import { Injectable, NotFoundException } from '@nestjs/common';

export interface Videojuego {
  id: number;
  titulo: string;
  plataforma: string;
  completado: boolean;
}

@Injectable()
export class GamesService {
  private juegos: Videojuego[] = [
    { id: 1, titulo: 'The Legend of Zelda: Tears of the Kingdom', plataforma: 'Nintendo Switch', completado: true },
    { id: 2, titulo: 'Elden Ring', plataforma: 'PC / PS5', completado: false },
    { id: 3, titulo: 'Mario Kar', plataforma: 'Nintendo Switch', completado: false },
    { id: 4, titulo: 'Mario Bros Wonder', plataforma: 'Nintendo Switch', completado: false }
  ];

  obtenerTodos(): Videojuego[] {
    return this.juegos;
  }

  obtenerPorId(id: number): Videojuego {
    const juego = this.juegos.find(j => j.id === id);
    if (!juego) {
      throw new NotFoundException(`El juego con ID ${id} no existe.`);
    }
    return juego;
  }

  crearJuego(nuevoJuego: { titulo: string; plataforma: string }): Videojuego {
    const juegoNuevo: Videojuego = {
      id: this.juegos.length > 0 ? Math.max(...this.juegos.map(j => j.id)) + 1 : 1,
      titulo: nuevoJuego.titulo,
      plataforma: nuevoJuego.plataforma,
      completado: false
    };
    this.juegos.push(juegoNuevo);
    return juegoNuevo;
  }

  eliminarJuego(id: number): { mensaje: string } {
    const juegoExiste = this.juegos.some(j => j.id === id);
    if (!juegoExiste) {
      throw new NotFoundException(`No se pudo eliminar: El ID ${id} no existe.`);
    }
    this.juegos = this.juegos.filter(j => j.id !== id);
    return { mensaje: `Juego con ID ${id} eliminado correctamente.` };
  }
}