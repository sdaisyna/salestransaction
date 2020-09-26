import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MvAddCustomer, MvCustomer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  errorMessage = '';
  displayedColumns: string[];
  dataSource: MatTableDataSource<MvCustomer>;
  selectedCustomer: MvAddCustomer = <MvAddCustomer>{};
  selection = new SelectionModel<MvCustomer>(false, []);

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.displayedColumns = ['customerId', 'firstName', 'middleName', 'lastName', 'email', 'phoneNumber', 'city', 'state', 'zipCode'];
    this.getAllCustomerDetail();
  }

  getAllCustomerDetail() {
    this.customerService.getAllCustomerDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvCustomer>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvCustomer>();
        this.errorMessage = 'No customer available !';
      }
    });
  }

  addCustomer() {
    this.selection.clear();
    this.selectedCustomer = <MvCustomer>{};
    this.openDialog('Add');
  }

  editCustomer() {
    this.openDialog('Edit');
  }

  openDialog(action: string) {
    if (action === 'Edit' && !this.selection.hasValue()) {
      // this.utilityService.openSnackBar('Please Select Row first', 'warn');
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '25%';
    dialogConfig.panelClass = 'mat-form-dialog';
    dialogConfig.data = { data: this.selectedCustomer, action: action };
    const dialogRef = this.dialog.open(CustomerFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Edit') {
          this.customerService.editCustomer(result).subscribe(res => {
            // this.utilityService.openSnackBar('Customer Edited', 'success');
            this.getAllCustomerDetail();
          });

        } else {
          this.customerService.addCustomer(result).subscribe(res => {
            // this.utilityService.openSnackBar('Customer added successfully', 'success');
            this.getAllCustomerDetail();
          });
        }
      }

    });
  }


  selectRow(e: any, row: MvCustomer) {
    this.selectedCustomer = { ...row };
    this.selection.toggle(row);
  }


}
