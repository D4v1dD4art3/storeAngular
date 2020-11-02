import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {NavComponent} from "./components/nav/nav.component";
import {FormEditComponent} from "./components/form-edit/form-edit.component";
import {FormProductComponent} from "./components/form-product/form-product.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductDashboardComponent} from "./components/product-dashboard/product-dashboard.component";
import {ProductTableComponent} from "./components/product-table/product-table.component";
const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "create",
        component: ProductFormComponent,
      },
      {
        path: "dashboard",
        component: ProductDashboardComponent,
      },
      {
        path: "table",
        component: ProductTableComponent,
      },
      {
        path: "products",
        component: ProductsListComponent,
      },
      {
        path: "products/create",
        component: FormProductComponent,
      },
      {
        path: "products/edit/:id",
        component: FormEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
