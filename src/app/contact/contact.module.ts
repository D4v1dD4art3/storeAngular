import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {ContactRountingModule} from "./contact-routing.module";
import {ContactComponent} from "./components/contact/contact.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {from} from "rxjs";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRountingModule,
    CommonModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class ContactModule {}
