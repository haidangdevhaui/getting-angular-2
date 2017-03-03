import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
                private _router: Router, 
                private _route: ActivatedRoute ){ }

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
        let id = this._route.snapshot.params['id'];
        if(id){
            productOperation = this._productService.update(id, this.product);
        }else{
            productOperation = this._productService.create(this.product);
        }

        productOperation.subscribe((response) => {
            this._router.navigate(['/product']);
        });
    }

    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        if(id){
            this.buttonValue = 'Update';
            this._productService.getProductById(id)
            .subscribe((product) => {
                this.product = product;
            });
        }
    }

}