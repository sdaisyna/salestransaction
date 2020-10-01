import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

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
        CdkTableModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
        HttpClientModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule

    ],

    declarations: [
        TransactionComponent,
        TransactionFormComponent

    ],
    entryComponents: [
        TransactionFormComponent
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
