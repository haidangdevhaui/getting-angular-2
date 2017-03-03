import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()

export class ProductService {
    private api_url = "https://api-haidangdev.herokuapp.com/api/";

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.api_url + 'product')
            .map((response: Response) => <IProduct[]> response.json().result)
            .catch(this.handleError);
    }

    getProductById(id): Observable<IProduct> {
        return this._http.get(this.api_url + 'product/show/' + id)
            .map((response: Response) => <IProduct> response.json().result)
    }

    create(product){
        return this._http.post(this.api_url + 'product/create', product)
            .map((response: Response) => response.json());
    }

    update(id, product){
        return this._http.put(this.api_url + 'product/update/' + id, product)
            .map((response: Response) => response.json());
    }
    
    deleteProduct(id) {
        return this._http.delete(this.api_url + 'product/destroy/' + id)
            .map((response: Response) => response.json());
    }

    upload(formData){
        return this._http.post(this.api_url + 'upload', formData)
            .map((response: Response) => response.json().result[0]);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}