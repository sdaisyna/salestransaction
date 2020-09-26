import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilityService } from 'src/core/services/utility.service';
import { MvAddProduct } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewInit {


  productForm: FormGroup;
  action: string;
  // tslint:disable-next-line: radix
  userId = parseInt(localStorage.getItem('userId'));
  selectedProduct: MvAddProduct = <MvAddProduct>{};


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
    this.selectedProduct = data.data || {};
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      insertPersonId: [this.userId]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.selectedProduct);
  }

  onClose() {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    this.productForm.updateValueAndValidity();
  }



}
