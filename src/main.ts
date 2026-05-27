import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitamos CORS por si después quieres conectarle un Frontend móvil o web
  app.enableCors(); 
  
  await app.listen(3000);
  console.log('API REST corriendo en: http://localhost:3000/videojuegos');
}
bootstrap();
