import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

const handleEnvironment = (app, config) => {
  const env = config.get('app.env');
  switch (env) {
    case 'DEV':
      handleDevEnvironment(app);
      break;
    case 'STG':
      console.log('Current environment: STG');
      break;
    default:
      console.log('Current environment: PROD');
      break;
  }
};

const handleDevEnvironment = (app) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('app.port');

  handleEnvironment(app, configService);

  await app.listen(port);
}

bootstrap();
