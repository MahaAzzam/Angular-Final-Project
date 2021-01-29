import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-headrer',
  templateUrl: './headrer.component.html',
  styleUrls: ['./headrer.component.scss']
})
export class HeadrerComponent implements OnInit{

  cartArray: Product[] = [];
  cartClicked = false;
  constructor(private productService:ProductService){}


  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {this.cartArray.push(res)},
      (err) => {console.error(err)},
      (complete) => {alert('complete')}
    )
  }

  clickToggle(): void {
    this.cartClicked = !this.cartClicked;
  }
  getPrice(item: Product): number {
    return item.discount ? item.price - item.discount : item.price
  }

  getTotal(): number {
    let sum = 0;
    for (let item of this.cartArray) {
      sum += this.getPrice(item)
    }
    return sum;
  }

}
