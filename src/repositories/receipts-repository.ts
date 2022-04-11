import { PrismaClient } from '@prisma/client';
import { Receipt } from '../entities/Receipts';

export class ReceiptRepository {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(receipt: Receipt) {
    await this.prisma.receipts.create({
      data: {
        id: receipt.id,
        description: receipt.description,
        value: receipt.value,
        date: receipt.date,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.receipts.findUnique({
      where: { id },
    });
  }

  async findAll({
    description,
    value,
  }: {
    description?: string;
    value?: number;
  }) {
    return this.prisma.receipts.findMany({
      where: {
        description: { contains: description },
        // value: { equals: Number(value) },
      },
    });
  }

  async update(receipt: Receipt) {
    return this.prisma.receipts.update({
      data: {
        description: receipt.description,
        value: receipt.value,
        date: receipt.date,
      },
      where: {
        id: receipt.id,
      },
    });
  }

  async deleteId(id: string) {
    return this.prisma.receipts.delete({
      where: { id },
    });
  }
}
