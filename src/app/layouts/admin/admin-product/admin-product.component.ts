import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      console.log(data);

    })
  }
  onDelete(id: number | string) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.onGetList();
    });
  }

  parentChangeStatus(newStatus: number, product: any) {
    console.log(newStatus, product);
    this.productService.updateProduct(
      product.id,
      {
        ...product,
        status: newStatus
      }).subscribe((data) => {
        this.onGetList();
      })
  }

}
