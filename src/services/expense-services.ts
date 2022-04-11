import { Expense } from '@/entities/Expenses';
import { ExpenseRepository } from '@/repositories/expenses-repository';

export class ExpenseServices {
  async create(description: string, value: number, id?: string, date?: Date) {
    const expense = new Expense({ description, value, id, date });
    const expenseRepository = new ExpenseRepository();
    await expenseRepository.create(expense);
    return expense;
  }

  async findById(id: string) {
    const expenseRepository = new ExpenseRepository();
    const expense = await expenseRepository.findById(id);
    return expense;
  }

  async findAll(description: string, value: number, id?: string, date?: Date) {
    const expense = new Expense({ description, value, id, date });
    const expenseRepository = new ExpenseRepository();
    await expenseRepository.findAll(expense);
    return expense;
  }

  async update(description: string, value: number) {
    const expense = new Expense({ description, value });
    const expenseRepository = new ExpenseRepository();
    await expenseRepository.update(expense);
    return Expense;
  }

  async deleteId(id: string) {
    const expenseRepository = new ExpenseRepository();
    const expense = await expenseRepository.deleteId(id);
    return expense;
  }
}
