import express from 'express';
import { Expense } from './entities/Expenses';
import { Receipt } from './entities/Receipts';
import { ExpenseRepository } from './repositories/expenses-repository';
import { ReceiptRepository } from './repositories/receipts-respository';

const servidor = express();

servidor.get('/', async (req, res) =>
  res.send('Hello world <br><br> Server started'),
);

const now = new Date();

const receipts = new Receipt({
  description: 'infra',
  id: '1',
  value: 1230,
  date: now,
});
console.log(receipts);

const expenses = new Expense({
  description: 'infra',
  id: '1',
  value: 1230,
  date: now,
});
console.log(expenses);

servidor.listen(3333);
