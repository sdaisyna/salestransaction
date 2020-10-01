import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { MvAddTransaction, MvTransactionDetail } from './transaction.model';
import { TransactionService } from './transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  errorMessage: string = null;
  displayedColumns: string[];
  dataSource: MatTableDataSource<MvTransactionDetail>;
  selectedTransaction: MvAddTransaction = <MvAddTransaction>{};
  selection = new SelectionModel<MvTransactionDetail>(false, []);
  selectionCheckBox = new SelectionModel<MvTransactionDetail>(true, []);

  constructor(
    private dialog: MatDialog,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['salesTransactionId', 'date', 'invoiceId', 'customerName', 'productName', 'quantity', 'rate', 'amount'];
    this.getAllTransactionDetail();
  }
  getAllTransactionDetail() {
    this.transactionService.getAllTransactionDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvTransactionDetail>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvTransactionDetail>();
        this.errorMessage = 'No transaction available !';
      }
    });
  }

  addTransaction() {
    this.selection.clear();
    this.selectedTransaction = <MvTransactionDetail>{};
    this.openDialog('Add');
  }

  editTransaction() {
    this.openDialog('Edit');
  }
  openDialog(action: string) {
    if (action === 'Edit' && !this.selection.hasValue()) {
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'mat-form-dialog';
    dialogConfig.data = { data: this.selectedTransaction, action: action };
    const dialogRef = this.dialog.open(TransactionFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Edit') {
          this.transactionService.editTransaction(result).subscribe(res => {
            this.getAllTransactionDetail();
          });
        } else {
          this.transactionService.addTransaction(result).subscribe(res => {
            this.getAllTransactionDetail();
          });
        }
      }
    });

  }

  selectRow(e: any, row: MvTransactionDetail) {
    this.selectedTransaction = { ...row };
    this.selection.toggle(row);
    this.selectionCheckBox.toggle(row);
  }

  isAllSelected() {
    const numSelected = this.selectionCheckBox.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selectionCheckBox.select(row));
  }

  checkboxLabel(row?: MvTransactionDetail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.salesTransactionId + 1}`;
  }


}
