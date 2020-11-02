import {Component, OnInit} from "@angular/core";
import {Product} from "../../../core/model/product.model";
import {ProductsService} from "../../../core/service/product/products.service";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.fetchProducts();
  }
  clickProduct(id: number) {
    console.log(`This is the product number ${id}`);
  }
  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
