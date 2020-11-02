import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from "@angular/core";
import {faCoffee, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Product} from "../../../core/model/product.model";
import {CartService} from "../../../core/service/cart/cart.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["product.component.scss"],
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  @Input() product: Product;
  today = new Date();
  faCoffee = faCoffee;
  faShoppingCart = faShoppingCart;
  // siempre inicializar el valor del @Output
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(private cartService: CartService) {
    console.log("1.constructor");
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("2. ngOnChanges");
  //   console.log(changes);
  // }
  ngOnInit() {
    console.log("3. ngOnInit");
  }
  ngDoCheck() {
    console.log("4. DoCheck");
  }
  ngOnDestroy() {
    // ideal para apagar cualquier buble de memoria
    console.log("5. ngOnDestroy");
  }
  addCart() {
    console.log("add to cart");
    this.cartService.addCart(this.product);
  }
}
