import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {ContactRountingModule} from "./contact-routing.module";
import {ContactComponent} from "./components/contact/contact.component";
import {from} from "rxjs";

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRountingModule, CommonModule, SharedModule],
})
export class ContactModule {}
