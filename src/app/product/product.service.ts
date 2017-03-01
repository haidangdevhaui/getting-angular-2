import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()

export class ProductService {
    private api_url = "api/product.json";

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.api_url)
            .map((response: Response) => <IProduct[]> response.json())
            .catch(this.handleError);
    }

    getProductById(id): Observable<IProduct> {
        return this._http.get(this.api_url)
            .map((response: Response) => <IProduct> response.json().filter((ele) => {
                return ele.id == id;
            })[0])
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    deleteProduct(id) {
        console.log(id);
    }
}