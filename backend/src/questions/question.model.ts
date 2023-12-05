// question.entity.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Question extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.JSONB, allowNull: false })
  options: { text: string; correct: boolean }[];
}
