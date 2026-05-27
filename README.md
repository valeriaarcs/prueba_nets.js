# 🎮 API REST de Catálogo de Videojuegos (NestJS)

Este proyecto constituye una prueba técnica inicial enfocada en el desarrollo de un Backend moderno, robusto y altamente escalable utilizando **NestJS** y **TypeScript**. Se implementa una arquitectura orientada a dominios (por características), sentando las bases óptimas para entornos de desarrollo profesional y corporativo.

Actualmente, la API procesa y gestiona la información en memoria, operando como un prototipo avanzado ("en proceso") completamente preparado para la inyección de persistencia de datos y su consumo desde aplicaciones cliente.

---

## 📂 Estructura del Proyecto (Arquitectura Modular)

A diferencia de los diseños monolíticos tradicionales, este backend separa las responsabilidades mediante componentes modulares desacoplados, facilitando el mantenimiento y la escalabilidad del sistema:

```text
src/
├── modules/
│   └── games/
│       ├── dto/
│       │   ├── create-game.dto.ts
│       │   └── update-game.dto.ts
│       ├── interfaces/
│       │   └── game.interface.ts
│       ├── games.controller.ts
│       ├── games.module.ts
│       └── games.service.ts
├── app.module.ts
└── main.ts