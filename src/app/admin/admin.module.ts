import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from "./components/nav/nav.component";
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {ProductDashboardComponent} from "./components/product-dashboard/product-dashboard.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductTableComponent,
    ProductDashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    FormEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
