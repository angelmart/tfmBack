import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger = require('morgan');
import expressStatusMonitor = require('express-status-monitor');
import cors = require('cors');
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger('dev'));
  app.use(cors());
  app.use(expressStatusMonitor()); // http://localhost:3000/status
  const PORT = 3000;
  await app.listen(PORT, () => {
      console.log(`___________ Run server in localhost:${PORT} ___________`);
  });
}

bootstrap();
