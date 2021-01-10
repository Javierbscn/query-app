export interface Sale {
  createdAt: string;
  datePayment: string;
  day: string;
  finalPrice: number;
  hour: string;
  id: string;
  name: string;
  nameAgency: string;
  paymentStatus: string;
  paymentType?: string;
  persons: number;
  timeZone: string;
  totalPrice?: number;
  wayToPay?: string;
}
