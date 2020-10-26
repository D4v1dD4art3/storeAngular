import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DemoComponent} from "./components/demo/demo.component";
import {DemoRountingModule} from "./demo-routing.module";
import {CartComponent} from "./components/cart/cart.component";
import {SharedModule} from "../shared/shared.module";
import {from} from "rxjs";
@NgModule({
  declarations: [DemoComponent, CartComponent],
  imports: [CommonModule, FormsModule, DemoRountingModule, SharedModule],
})
export class DemoModule {}
