import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

import { IProduct } from './product';

@Component({
    selector: 'detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    
    public pageTitle = 'Product Detail';

    public product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) { }

    ngOnInit() { 
        let id = this._route.snapshot.params['id'];
        this._productService.getProductById(id)
            .subscribe((product) => {
                this.product = product;
            });
    }
}