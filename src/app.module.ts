import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [CatsModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
