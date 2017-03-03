import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-form.component.html'
})

export class ProductForm {
    formTitle = 'Create Product';
    buttonValue = 'Create';
    product = {
        name: '',
        price: 0,
        image: ''
    }

    constructor(private _productService: ProductService,
                private _router: Router ){ }

    onUpload(event: any){
        let img = event.target.files[0];
        let formData = new FormData();
        formData.append('images', img);
        this._productService.upload(formData).subscribe((response) => {
            this.product.image = response.src;
        })
    }

    onSubmit(){
        let productOperation: Observable<IProduct>;

        productOperation = this._productService.create(this.product);

        productOperation.subscribe((response) => {
            this._router.navigate(['/product']);
        });
    }

}