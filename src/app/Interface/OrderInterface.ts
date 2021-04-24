import { ProductId } from "./ProductInterface"

export interface Order {
    Id: string;
    ProductInfo: {
        Product: ProductId,
        Quantity: number,
    }
    TotalActualPrice: number;
    TotalDisountPrice: number;
    TotalDisountPriceWithCouponApplied: number;
    TotalNumberOfProducts: number;
    Status: string;
    Date: string;
    UserUid: string;
}