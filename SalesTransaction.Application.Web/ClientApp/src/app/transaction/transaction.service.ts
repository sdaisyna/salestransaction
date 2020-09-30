import { Injectable } from '@angular/core';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(private api: WebApiService) { }

    getAllTransactionDetail() {
        return this.api.get('transaction/alltransactiondetail');
    }

}
