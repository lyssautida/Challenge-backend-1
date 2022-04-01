type receiptProps = {
  id: string;
  description: string;
  value: number;
  date?: Date;
};

export class Receipt {
  public id: string;
  public description: string;
  public value: number;
  public date: Date;

  constructor(input: receiptProps) {
    this.id = input.id;
    this.description = input.description;
    this.value = input.value;
    this.date = input.date ?? new Date();
  }
}
