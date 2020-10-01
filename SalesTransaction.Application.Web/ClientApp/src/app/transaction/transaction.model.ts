export interface MvTransactionDetail {
    salesTransactionId: number;
    date: Date;
    invoice: number;
    customerId: number;
    customerName: string;
    productId: number;
    productName: string;
    quantity: number;
    rate: number;
    amount: number;

}

export interface MvAddTransaction {
    customerId: number;
    productId: number;
    quantity: number;
}
