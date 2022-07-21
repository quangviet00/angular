import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {

  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      console.log(data);

    })
  }


}
