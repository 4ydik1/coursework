// questions.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from './question.model';

@Module({
  imports: [SequelizeModule.forFeature([Question])],
})
export class QuestionsModule {}
