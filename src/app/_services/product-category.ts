import { ProductCategory } from "../_model/product-category";

export class ProductCategoryService{
    productCategory : ProductCategory[] = [
        {id: '5eac38b30cfca15d7c804090' , name: 'Arts & Crafts'},
        // {id:2 , name: 'Baby'},
        // {id:3 , name: 'Books'},
        // {id:4 , name: 'Automotive'},
        // {id:5 , name: 'Toys & Games'},
        // {id:6 , name: 'Tools & Home Improvement'},
        // {id:7 , name: 'Sports & Outdoors'},
        // {id:8 , name: 'Movies & Television'},
        // {id:9 , name: 'Military Accessories'},
        // {id:11 , name: 'Eletronics'},
        // {id:11 , name: 'Womens Fashion'},
        // {id:12 , name: 'Mens Fashion'},
        // {id:13 , name: 'Health & Household'},
        // {id:14 , name: 'Home & Kitchen'}
    ]

    getAllProductCategory():ProductCategory[]{
        return this.productCategory.slice();
      }
}