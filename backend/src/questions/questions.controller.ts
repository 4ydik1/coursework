// questions.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.model';
import {QuestionDto} from "./dto/question.dto";

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('/create')
   async createQuestion(@Body() questionData: QuestionDto): Promise<QuestionDto> {
    const question = await this.questionsService.createQuestion(questionData);
    return question;
  }
}
