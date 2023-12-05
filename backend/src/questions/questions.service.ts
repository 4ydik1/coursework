// questions.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from './question.model';
import {QuestionDto} from "./dto/question.dto";

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question)
    private readonly questionModel: typeof Question,
  ) {}

  async createQuestion(questionData: QuestionDto) {
    const transformedData = {
      title: questionData.title,
      options: JSON.stringify(questionData.options)
    }
    const question = await this.questionModel.create(transformedData);
    return question;
  }
}
