

import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class ProductService {
    private products: Product[] = [
        // {
        //     id: 1,
        //     data: [{ name: 'photo camera', describtion: 'this is photo camera' }],
        //     price: 600,
        //     discount: 50,
        //     category: {id:1 , name: 'Arts & Crafts'},
        //     imagesUrls: ['../../../assets/img/camera.webp']
        // },
        // {
        //     id: 2,
        //     data: [{ name: 'ipad', describtion: 'this is ipad' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:2 , name: 'Baby'},
        //     imagesUrls: ['../../../../assets/img/ipad.jpg']
        // },
        // {
        //     id: 3,
        //     data: [{ name: 'labtop', describtion: 'this is labtop' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:3},
        //     imagesUrls: ['../../../../assets/img/labtop.jpg']
        // },
        // {
        //     id: 4,
        //     data: [{ name: 'photo camera', describtion: 'this is photo camera' }],
        //     price: 600,
        //     discount: 50,
        //     category:{id:4},
        //     imagesUrls: ['../../../assets/img/camera.webp']
        // },
        // {
        //     id: 5,
        //     data: [{ name: 'ipad', describtion: 'this is ipad' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:5},
        //     imagesUrls: ['../../../../assets/img/ipad.jpg']
        // },
        // {
        //     id: 6,
        //     data: [{ name: 'labtop', describtion: 'this is labtop' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:6},
        //     imagesUrls: ['../../../../assets/img/labtop.jpg']
        // }, {
        //     id: 7,
        //     data: [{ name: 'photo camera', describtion: 'this is photo camera' }],
        //     price: 600,
        //     discount: 50,
        //     category:{id:7},
        //     imagesUrls: ['../../../assets/img/camera.webp']
        // },
        // {
        //     id: 8,
        //     data: [{ name: 'ipad', describtion: 'this is ipad' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:8},
        //     imagesUrls: ['../../../../assets/img/ipad.jpg']
        // },
        // {
        //     id: 9,
        //     data: [{ name: 'labtop', describtion: 'this is labtop' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:9},
        //     imagesUrls: ['../../../../assets/img/labtop.jpg']
        // }, {
        //     id: 10,
        //     data: [{ name: 'iphone', describtion: 'this is iphone' }],
        //     price: 25000,
        //     discount: 300,
        //     category:{id:10},
        //     imagesUrls: ['../../../assets/img/iphone.jpg']
        // },
        // {
        //     id: 11,
        //     data: [{ name: 'samsung', describtion: 'this is samsung' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:11},
        //     imagesUrls: ['../../../../assets/img/samsung.jpg']
        // },
        // {
        //     id: 12,
        //     data: [{ name: 'huawei', describtion: 'this is huawei' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:12},
        //     imagesUrls: ['../../../../assets/img/huawei.jpg']
        // }, {
        //     id: 13,
        //     data: [{ name: 'iphone', describtion: 'this is iphone' }],
        //     price: 25000,
        //     discount: 300,
        //     category:{id:13},
        //     imagesUrls: ['../../../assets/img/iphone.jpg']
        // },
        // {
        //     id: 14,
        //     data: [{ name: 'samsung', describtion: 'this is samsung' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:14},
        //     imagesUrls: ['../../../../assets/img/samsung.jpg']
        // },
        // {
        //     id: 15,
        //     data: [{ name: 'huawei', describtion: 'this is huawei' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:1},
        //     imagesUrls: ['../../../../assets/img/huawei.jpg']
        // }, {
        //     id: 16,
        //     data: [{ name: 'iphone', describtion: 'this is iphone' }],
        //     price: 25000,
        //     discount: 300,
        //     category:{id:2},
        //     imagesUrls: ['../../../assets/img/iphone.jpg']
        // },
        // {
        //     id: 17,
        //     data: [{ name: 'samsung', describtion: 'this is samsung' }],
        //     price: 8000,
        //     discount: 200,
        //     category:{id:3},
        //     imagesUrls: ['../../../../assets/img/samsung.jpg']
        // },
        // {
        //     id: 18,
        //     data: [{ name: 'huawei', describtion: 'this is huawei' }],
        //     price: 25000,
        //     // discount : 50,
        //     category:{id:4},
        //     imagesUrls: ['../../../../assets/img/huawei.jpg']
        // }
    ]
    productAdded = new EventEmitter<Product>();

    baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/'

    constructor(private httpClient : HttpClient){}
    getAllProducts(){
       return this.httpClient.get(`${this.baseUrl}product`);
        // return this.products.slice();
    } 

    getProductById(id) {
        // return this.products.find(p => p.id == id)
        return this.httpClient.get(`${this.baseUrl}product/${id}`);
    }



    addProduct(product) {
        // const id = this.products.length;
        // const { data, price, discount, category, imagesUrls, paymentTypes, tags } = product;
        // const newProduct: Product = { id, data, price, discount, category, imagesUrls, paymentTypes, tags };
        // this.products.push(newProduct);
        // console.log(this.products);

        let body = {
            discount : product.discount,
            price : product.price,
            imagesUrls:product.imagesUrls,
            data : product.data,
            categoryId :product.category.id
        };
        // const token = localStorage.getItem('token');
        // console.log(token);
        
        // const headers = new HttpHeaders({
        //     authorization : token
        //     // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50V…0Njd9.UVYYutwFaxvSJF8CdpKJKhrFStJobAhLJImHcyv37PQ"

        // })
      return  this.httpClient.post(`${this.baseUrl}product/add`,body);

        
    }

    
    updateProduct(product: Product) {
        const index = this.products.findIndex(p => p.id == product.id);
        // this.products[index] = { id:product.id, data:product.data, price:product.price, discount:product.discount, category:product.category, imagesUrls:product.imagesUrls, paymentTypes:product.paymentTypes, tags:product.tags }
    }

    deleteProduct(id: number) {
        const index = this.products.findIndex(p => p.id == id);
        this.products.splice(index, 1);
    }

    searchByName(productName:string){
        const prodName = productName.toLocaleLowerCase();
       return this.products.filter(p => p.data[0].name.toLocaleLowerCase().includes(prodName));
    }
}