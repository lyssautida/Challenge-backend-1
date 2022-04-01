import { PrismaClient } from '@prisma/client';
import { Expense } from '../entities/Expenses';

export class ExpenseRepository {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(expense: Expense) {
    await this.prisma.receipts.create({
      data: {
        id: expense.id,
        description: expense.description,
        value: expense.value,
        date: expense.date,
      },
    });
  }

  findById(id: string) {
    return this.prisma.expenses.findUnique({
      where: { id },
    });
  }

  async findAll(expense?: Expense) {
    return this.prisma.expenses.findMany({
      where: {
        description: expense?.description,
        value: expense?.value,
        date: expense?.date,
      },
    });
  }

  async update(expense: Expense) {
    return this.prisma.receipts.update({
      data: {
        description: expense.description,
        value: expense.value,
      },
      where: {
        id: expense.id,
      },
    });
  }

  async deleteId(id: string) {
    return this.prisma.expenses.delete({
      where: { id },
    });
  }
}
