import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PageNotFoundRoutingModule} from "./page-not-found-routing.module";
import {SharedModule} from "../shared/shared.module";
import {from} from "rxjs";
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, FormsModule, PageNotFoundRoutingModule, SharedModule],
})
export class PageNotFoundModule {}
