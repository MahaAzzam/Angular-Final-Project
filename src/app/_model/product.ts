import { PaymentType } from "./payment-type";
import { ProductCategory } from "./product-category";
import { ProductLang } from "./product-lang";
import { Tag } from "./tag";

export interface Product {
    _id : string;
    id?: number;
    data: ProductLang[];
    imagesUrls?:string[];
    price?: number;
    discount?: number;
    paymentTypes ?: PaymentType[];
    category?: ProductCategory;
    tags?: Tag[];
}