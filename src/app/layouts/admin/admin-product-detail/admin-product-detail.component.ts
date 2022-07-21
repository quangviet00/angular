import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  id: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
      console.log(data);
    })
  }
}
