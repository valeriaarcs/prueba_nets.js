import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('videojuegos')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getTodos() {
    return this.gamesService.obtenerTodos();
  }

  @Get(':id')
  getPorId(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.obtenerPorId(id);
  }

  @Post()
  crearNuevo(@Body() body: { titulo: string; plataforma: string }) {
    return this.gamesService.crearJuego(body);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.eliminarJuego(id);
  }
}