import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
    providedIn: 'root'
})
export class UserDetailService {
    constructor(private api: WebApiService) {

    }

    getUser(userId: number) {
        return this.api.get('account/userdetail', JSON.stringify({ userId: userId }));
    }

    getAllUserDetail() {
        return this.api.get('account/alluserdetail');

    }

}
