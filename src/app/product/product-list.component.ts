import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html'
})

export class ProductList implements OnInit {
    pageTitle:string = 'List Product';
    products: IProduct[];
    
    private _productService : ProductService;
    
    constructor(_productService: ProductService) {
        this._productService = _productService;
    }

    ngOnInit():void {
        this._productService
            .getProducts()
            .subscribe((products: IProduct[]) => {
                this.products = products;
            });
    }

    onDelete(id){
        this._productService.deleteProduct(id);
    }
}