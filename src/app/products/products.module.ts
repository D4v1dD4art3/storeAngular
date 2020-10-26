import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductRoutingModule} from "./products-routing.module";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
// import {faCoffee, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {from} from "rxjs";

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class ProductsModule {}
