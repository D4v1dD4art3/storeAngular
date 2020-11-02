import {BrowserModule} from "@angular/platform-browser";
// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LayoutComponent} from "./layout/components/layout/layout.component";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
