import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInput, MatInputModule, MatSnackBar, MatTableModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
        HttpClientModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatDialogModule


    ],
    entryComponents: [
        ProductFormComponent
    ],
    declarations: [
        ProductComponent,
        ProductFormComponent

    ],
    providers: [
        ProductService
    ],
    exports: [
        ProductComponent
    ]

})

export class ProductModule {


}
