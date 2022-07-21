import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './layouts/admin/admin-home/admin-home.component';
import { AdminProductDetailComponent } from './layouts/admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './layouts/admin/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './layouts/admin/admin-product/admin-product.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientMainComponent } from './layouts/client/client-main/client-main.component';
import { ClientProductDetailComponent } from './layouts/client/client-product-detail/client-product-detail.component';
import { ClientProductComponent } from './layouts/client/client-product/client-product.component';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientMainComponent
      },
      {
        path: 'phones',
        children: [
          {
            path: '',
            component: ClientProductComponent,
          },
          {
            path: ':id',
            component: ClientProductDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
