import { randomUUID } from 'crypto';

type expenseProps = {
  id?: string;
  description: string;
  value: number;
  date?: Date;
};
export class Expense {
  public id: string;
  public description: string;
  public value: number;
  public date: Date;

  constructor(input: expenseProps) {
    this.id = input.id ?? randomUUID();
    this.description = input.description;
    this.value = input.value;
    this.date = input.date ?? new Date();
  }
}
