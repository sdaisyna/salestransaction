import { Component, OnInit } from '@angular/core';
import { MvProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  userMessage = '';
  displayedColumns: string[];
  dataSource: MvProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['productId', 'productName', 'description', 'rate'];
    this.getAllProductDetail();
  }
  getAllProductDetail() {
    this.productService.getAllProductDetail().subscribe((data: any) => {
      if (data && data.data) {
        this.dataSource = data.data;
      } else {
        this.dataSource = [];
        this.userMessage = 'No product available !';
      }
    });

  }

}
