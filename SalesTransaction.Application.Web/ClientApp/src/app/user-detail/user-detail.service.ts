import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable()
export class UserDetailService {
    constructor(private api: WebApiService) {

    }

    getUserDetail(json: any): Observable<any> {
        return this.api.get('Account/UserDetail', { json: JSON.stringify(json) });
    }

    getAllUserDetail(): Observable<any> {
        return this.api.get('Account/AllUserDetail');

    }

}
