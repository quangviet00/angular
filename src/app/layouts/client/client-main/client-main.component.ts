import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
  products:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);

    })
  }

}
