import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('GitHub Security Monitor')
    .setDescription(
      'This API generates alerts based on github webhook security alerts.',
    )
    .setVersion('v0.1.0')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(app, config, options),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
