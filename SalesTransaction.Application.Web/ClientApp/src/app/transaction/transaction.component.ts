import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MvTransactionDetail } from './transaction.model';
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

  constructor(
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
        this.errorMessage = 'No product available !';
      }
    });
  }


}
