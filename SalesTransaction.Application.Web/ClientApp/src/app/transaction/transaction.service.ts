import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(private api: WebApiService) { }

    getAllTransactionDetail() {
        return this.api.get('transaction/alltransactiondetail');
    }

    addTransaction(json): Observable<any> {
        return this.api.post('transaction/addtransaction', json);
    }
    editTransaction(json): Observable<any> {
        return this.api.post('transaction/updatetransaction', json);
    }

}
