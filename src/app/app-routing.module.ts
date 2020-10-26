import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {AdminGuard} from "./admin.guard";
import {LayoutComponent} from "./layout/components/layout/layout.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
      },
      // {
      //   path: "products/:id",
      //   loadChildren: () =>
      //     import("./product-detail/product-detail.module").then(
      //       (m) => m.ProductDetailModule
      //     ),
      // },
      {
        path: "contact",
        canActivate: [AdminGuard],
        loadChildren: () =>
          import("./contact/contact.module").then((m) => m.ContactModule),
      },
      {
        path: "demo",
        loadChildren: () =>
          import("./demo/demo.module").then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
