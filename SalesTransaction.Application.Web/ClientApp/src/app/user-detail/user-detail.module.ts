import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailService } from './user-detail.service';

const routes: Routes = [
    {
        path: '',
        component: UserDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        HttpClientModule
    ],
    declarations: [
        UserDetailComponent
    ],
    providers: [
        UserDetailService
    ],
    exports: [
        UserDetailComponent
    ]

})
export class UserDetailModule {

}
