import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ProductForm } from './product-form.component';
import { ProductList } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductForm,
        ProductList
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild([
            {path: 'product', component: ProductComponent, 
            children: [
                {path: '', component: ProductList},
                {path: 'detail/:id', component: ProductDetailComponent},
                {path: 'create', component: ProductForm}
            ]}
        ])
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}