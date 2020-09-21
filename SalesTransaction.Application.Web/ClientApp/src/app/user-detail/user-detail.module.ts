import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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