import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customer/customer.service';
import { ProductService } from 'src/app/product/product.service';
import { MvAddTransaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit, AfterViewInit {
  transactionForm: FormGroup;
  action: string;
  // tslint:disable-next-line: radix
  userId = parseInt(localStorage.getItem('userId'));
  selectedTransaction: MvAddTransaction = <MvAddTransaction>{};

  productList = [];
  customerList = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TransactionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private productService: ProductService,
    private customerService: CustomerService

  ) {
    this.action = data.action;
    this.selectedTransaction = data.data || {};
  }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      productId: [this.selectedTransaction.productId, Validators.required],
      customerId: [this.selectedTransaction.customerId, Validators.required],
      quantity: [this.selectedTransaction.quantity, [Validators.required]],
      insertPersonId: [this.userId]
    });
    this.getProducts();
    this.getCustomers();
  }
  getCustomers() {
    this.productService.getAllProductDetail().subscribe(products => {
      if (products && products.data) {
        products.data.forEach(product => {
          if (product.productId) {
            this.productList.push({
              id: product.productId,
              name: product.productName
            });
          }
        });
      }
    });
  }
  getProducts() {
    this.customerService.getAllCustomerDetail().subscribe(customers => {
      if (customers && customers.data) {
        customers.data.forEach(customer => {
          if (customer.customerId) {
            this.customerList.push({
              id: customer.customerId,
              name: `${customer.firstName} ${customer.middleName} ${customer.lastName} `
            });
          }
        });
      }
    });

  }

  onSubmit() {
    // console.log(this.selectedSalesTransaction);
    this.dialogRef.close(this.selectedTransaction);
  }

  onClose() {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.transactionForm.updateValueAndValidity();
  }

}
