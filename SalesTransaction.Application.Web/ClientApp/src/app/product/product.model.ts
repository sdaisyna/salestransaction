export interface MvProduct {
    productId: number;
    productName: string;
    description: string;
    rate: number;
    startDate: Date;
    endDate: Date;
}

export interface MvAddProduct {
    productName: string;
    description: string;
    rate: number;
    startDate: Date;
    endDate: Date;

}
