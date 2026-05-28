// src/modules/games/dto/update-game.dto.ts
export class UpdateGameDto {
  readonly titulo?: string;
  readonly plataforma?: string;
  readonly completado?: boolean;
}