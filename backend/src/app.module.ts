import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/users.model";
import "dotenv";
import {QuestionService} from "../../src/app/services/question.service";
import {QuestionsModule} from "./questions/questions.module";
import {Question} from "./questions/question.model";

@Module({
  imports: [
      AuthModule, UsersModule, QuestionsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: Number('5432'),
      username: 'postgres',
      password: '1234',
      database: 'courserwork',
      models: [User,Question],
      autoLoadModels: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
