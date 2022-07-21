import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  id: string | undefined;
  avatarBase64: any;
  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      image_url: new FormControl('',Validators.required),
      price: new FormControl(0, [Validators.required]),
      status: new FormControl(1),
      desc: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);

    if (this.id) {
      this.productService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue(data);
        console.log(data);
      });
    } else {
      this.product = {
        name: '',
        desc: '',
        price: 0,
        image_url: '',
        status: 1,
      }
    }
  }
  onSubmit(data: any) {

    if (this.id) {
      return this.productService.updateProduct(this.id, data).subscribe((obj) => {
        this.router.navigate(['admin/phones', this.id]);
        alert('Sửa thành công');
      })
    }
    return this.productService.createProduct(data).subscribe((obj) => {
      this.router.navigate(['admin/phones']);
      alert('Thêm mới thành công');
    });
  }
  // resultString(e: any) {
  //   if (e && e.target && typeof e.target.result == 'string') {
  //     return e.target.result;
  //   }

  //   return '';
  // }

  // changeAvatar(event: any) {
  //   const arrayImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
  //   const file = event.target.files[0];
  //   if (file.size > 3000000) {
  //     return alert('Kích thước file quá lớn');
  //   } else if (!arrayImageTypes.includes(file.type)) {
  //     return alert('Kiểu dữ liệu không phù hợp');
  //   }
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.avatarBase64 = e.target?.result;
  //     const image = new Image();
  //     image.src = this.resultString(e);
  //   }
  //   reader.readAsDataURL(file);
  // }

}
