import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';

const routes: Routes = [
    {
        path: '',
        component: TransactionComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        HttpClientModule,



    ],

    declarations: [
        TransactionComponent

    ],
    providers: [
        TransactionService
    ],
    exports: [
        TransactionComponent
    ]

})

export class TransactionModule {


}
