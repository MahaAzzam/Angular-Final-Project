import { NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { TestComponent } from './test/test.component';

const routes : Routes = [
    {path:'home',component : HomeComponent },
    {path:'login',component : LoginComponent },
    {path:'register', component : RegisterComponent },
    {path: 'product',loadChildren: () => import('./products/product.module').then(mod => mod.ProductModule)},
    // {path:'product', loadChildren: './products/product.module#ProductModule' },
    {path:'**', component :TestComponent },
 
    
]

@NgModule({
    imports :[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules , scrollPositionRestoration:'top'})],
    exports :[RouterModule]
})

export class CustomerAppRoutingModule{}