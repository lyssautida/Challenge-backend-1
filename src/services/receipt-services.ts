import { Receipt } from '../entities/Receipts';
import { ReceiptRepository } from '../repositories/receipts-repository';

export class ReceiptServices {
  async create(description: string, value: number, id?: string, date?: Date) {
    const receipt = new Receipt({ description, value, id, date });
    const receiptRepository = new ReceiptRepository();
    await receiptRepository.create(receipt);
    return receipt;
  }

  async findById(id: string) {
    const receiptRepository = new ReceiptRepository();
    const receipt = await receiptRepository.findById(id);
    return receipt;
  }

  async findAll(description?: string, value?: number) {
    const receiptRepository = new ReceiptRepository();
    const foundReceipts = await receiptRepository.findAll({
      description,
      value,
    });
    return foundReceipts;
  }

  async update(id: string, description?: string, value?: number, date?: Date) {
    const receiptRepository = new ReceiptRepository();
    const foundReceipt = await receiptRepository.findById(id);
    if (!foundReceipt) {
      throw new Error('Receipt not found');
    }
    foundReceipt.description = description ?? foundReceipt.description;
    foundReceipt.value = value ?? foundReceipt.value;
    foundReceipt.date = date ?? foundReceipt.date;
    await receiptRepository.update(foundReceipt);
    return foundReceipt;
  }

  async deleteId(id: string) {
    const receiptRepository = new ReceiptRepository();
    const receipt = await receiptRepository.deleteId(id);
    return receipt;
  }
}
