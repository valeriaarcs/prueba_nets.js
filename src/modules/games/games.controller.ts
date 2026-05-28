// src/modules/games/games.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import type { Videojuego } from './interfaces/game.interface';

@Controller('videojuegos')
export class GamesController {
    // Inyección de dependencias
    constructor(private readonly gamesService: GamesService) { }

    // GET /videojuegos - Obtener todos los videojuegos
    @Get()
    findAll(): Videojuego[] {
        return this.gamesService.findAll();
    }

    // GET /videojuegos/:id - Obtener un videojuego por ID
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Videojuego {
        return this.gamesService.findOne(id);
    }

    // POST /videojuegos - Crear un nuevo videojuego
    @Post()
    create(@Body() createGameDto: CreateGameDto): Videojuego {
        return this.gamesService.create(createGameDto);
    }

    // PUT /videojuegos/:id - Actualizar un videojuego por completo o por partes
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateGameDto: UpdateGameDto): Videojuego {
        return this.gamesService.update(id, updateGameDto);
    }

    // DELETE /videojuegos/:id - Eliminar un videojuego
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): { message: string } {
        return this.gamesService.remove(id);
    }
}