import { Injectable } from '@angular/core';
import { WebApiService } from 'src/core/services/web-api.service';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private api: WebApiService) { }

    getAllProductDetail() {
        return this.api.get('product/allproductdetail');
    }

}
