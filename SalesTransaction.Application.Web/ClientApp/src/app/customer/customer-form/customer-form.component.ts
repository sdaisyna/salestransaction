import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MvAddCustomer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomerFormComponent }]
})
export class CustomerFormComponent implements OnInit, AfterViewInit {

  customerForm: FormGroup;
  action: string;
  // tslint:disable-next-line: radix
  userId = parseInt(localStorage.getItem('userId'));
  selectedCustomer: MvAddCustomer = <MvAddCustomer>{};



  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
    this.selectedCustomer = data.data || {};
  }


  ngOnInit(): void {

    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['',
        [Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8), Validators.maxLength(15)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      insertPersonId: [this.userId]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.selectedCustomer);
  }

  onClose() {
    this.dialogRef.close();
    // this.utilityService.openSnackBar('Operation Cancelled', 'warn');
  }

  ngAfterViewInit(): void {
    this.customerForm.updateValueAndValidity();
  }

}
