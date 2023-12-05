// question.dto.ts

import { IsString, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class OptionDto {
  @IsString()
  text: string;

  @IsBoolean()
  correct: boolean;
}

export class QuestionDto {
  @IsString()
  readonly title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  readonly options: OptionDto[];
}
