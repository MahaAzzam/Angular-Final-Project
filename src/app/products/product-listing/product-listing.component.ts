import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  product : Product[];
  pageSize =9;
  pageNumbers: number[] =[];
  currentPage =0;
  searchVal : string='';
  @Output() productAdded = new EventEmitter<Product>();

  constructor( private productService:ProductService) {
 
  }
  ngOnInit(): void {
    // this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response) =>{
        this.product = response['product'];
       const len = response['numberOfProducts']
        this.calculateNumberOfPages(len);
        console.log("length: "+ len);
        
      },
      (error) =>{console.log(error);
      },
      () =>{}
    );
    

    
  }
  calculateNumberOfPages(length){
    this.pageNumbers =[];
    for(let i=0; i< length /this.pageSize; i++){
      this.pageNumbers.push(i+1);}
  }
  subscribeFunction(object: Product):void{
    this.productAdded.emit(object);
  }

  sliceArray():Product[]{
    const start = this.currentPage*this.pageSize;
    return this.product.slice(start , start+ this.pageSize);
  }

  onSearchHandler(searchInput){
    this.product = this.productService.searchByName(searchInput.value);
    // this.calculateNumberOfPages();
    console.log(searchInput.value);
    
  }

}
