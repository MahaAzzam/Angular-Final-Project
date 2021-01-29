import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { HeadrerComponent } from './layout/headrer/headrer.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.services';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomerAppRoutingModule } from './app-routing.module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/dropdown/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadrerComponent,
    FooterComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    SharedModule,
    ReactiveFormsModule,
    CustomerAppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [ProductService,PaymentTypeService, ProductCategoryService,
    {provide: HTTP_INTERCEPTORS , useClass: MyInterceptorService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
