import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable()

export class LoginService {
    constructor(private api: WebApiService) {

    }

    getLogin(json: any): Observable<any> {
        return this.api.post('Account/Login', json);
    }

}
