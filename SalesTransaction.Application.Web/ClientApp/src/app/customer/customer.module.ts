import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';


const routes: Routes = [
    {
        path: '',
        component: CustomerComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatDialogModule,
        ScrollingModule,
    ],
    entryComponents: [
        CustomerFormComponent
    ],
    declarations: [
        CustomerComponent,
        CustomerFormComponent
    ],

    providers: [
        CustomerService
    ],
    exports: [
        CustomerComponent
    ]

})
export class CustomerModule {

}
