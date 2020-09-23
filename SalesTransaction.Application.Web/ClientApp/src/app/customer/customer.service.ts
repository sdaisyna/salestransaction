
import { Injectable } from '@angular/core';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(private api: WebApiService) {

    }

    getAllCustomerDetail() {
        return this.api.get('customer/allcustomerdetail');

    }

}
