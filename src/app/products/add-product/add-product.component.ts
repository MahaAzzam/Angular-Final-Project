import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  paymentTypes: PaymentType[];
  productCategory: ProductCategory[] = [];
  product: Product = {_id:'', data: [{}], paymentTypes: [], tags: [], category: {} }
  editMode : boolean =false;
  constructor(
    private paymentTypeService: PaymentTypeService,
    private productCategoryService: ProductCategoryService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.editMode = this.activatedRoute.snapshot.url[1].path === 'edit' && true;

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.id;
     this.productService.getProductById(+id).subscribe(
       (res) => {this.product = res['product']},
       () => {},
       () => {}
     )
    }

    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllProductCategory();

  }

  onSubmit(form) {
    for (let index = 0; index < this.paymentTypes.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentTypes.push(this.paymentTypes[index]);
      }
    }
    this.productService.addProduct(this.product).subscribe(
      (response) =>{console.log(response);
        this.router.navigate(['/product','listing'])
      },
      (error) =>{console.log(error);
      },
      () =>{}
    )


  }

  onCheckBoxPressed(index) {
    // this.product.paymentTypes.push(this.paymentTypes[index])
  }

  onTagAdded(tagInput) {
    this.product.tags.push({ name: tagInput.value });
    tagInput.value = '';
  }





  
  deleteTag(tagId) {
    // this.product.tags = this.product.tags.filter(p => p.id !== tagId);
    var index = this.product.tags.indexOf(tagId);
    this.product.tags.splice(index, 1);

  }

  deleteAllTags() {
    this.product.tags.length = 0
  }
}
