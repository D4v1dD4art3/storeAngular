import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {from} from "rxjs";
import {ProductsService} from "../../../core/service/product/products.service";
import {Product} from "../../../core/model/product.model";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
  createProduct() {
    const newProduct: Product = {
      id: "222",
      title: "new from angular",
      image: "assets/images/banner-1.jpg",
      description: "a new product with a post",
      price: 2000,
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }
  updateProduct() {
    const updateProduct: Partial<Product> = {
      description: "edicion titulo",
      price: 56555,
    };
    this.productsService
      .updateProduct("2", updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }
  deleteProduct() {
    this.productsService.deleteProduct("222").subscribe((product) => {
      console.log(product);
    });
  }
}
