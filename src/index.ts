import express from 'express';
import { ReceiptController } from './controllers/receipt-controller';

const servidor = express();

servidor.use(express.json());

servidor.get('/', async (req, res) => res.send

const receiptController = new ReceiptController();

servidor.post('/receipts', async (req, res) =>
  receiptController.create(req, res),
);

servidor.get('/receipts', (req, res) => receiptController.findAll(req, res));

servidor.get('/receipts/:id', async (req, res) => {
  receiptController.findById(req, res);
});

servidor.put('/receipts/:id', async (req, res) =>
  receiptController.update(req, res),
);

servidor.delete('/receipts/:id', async (req, res) => {
  receiptController.deleteId(req, res);
});

servidor.listen(3333);
