import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-product-detail',
  templateUrl: './client-product-detail.component.html',
  styleUrls: ['./client-product-detail.component.css']
})
export class ClientProductDetailComponent implements OnInit {

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
