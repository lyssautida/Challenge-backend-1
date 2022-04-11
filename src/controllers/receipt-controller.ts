import { Request, Response } from 'express';
import { ReceiptServices } from '../services/receipt-services';

export class ReceiptController {
  async create(req: Request, res: Response) {
    const { description, value, id, date } = req.body;
    const receiptServices = new ReceiptServices();
    const receipt = await receiptServices.create(description, value, id, date);
    return res.json(receipt);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const receiptServices = new ReceiptServices();
    const receipt = await receiptServices.findById(id);

    return res.json(receipt);
  }

  async findAll(req: Request, res: Response) {
    const { description, value } = req.query;
    const receiptServices = new ReceiptServices();
    const receipt = await receiptServices.findAll(
      description as string,
      Number(value),
    );
    return res.json(receipt);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { description, value, date } = req.body;
    const receiptServices = new ReceiptServices();
    const receipt = await receiptServices.update(id, description, value, date);
    return res.json(receipt);
  }

  async deleteId(req: Request, res: Response) {
    const { id } = req.params;
    const receiptServices = new ReceiptServices();
    const receipt = await receiptServices.deleteId(id);
    return res.json(receipt);
  }
}
