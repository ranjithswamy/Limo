import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { BookModule } from "./book/book.module";
import { CarsModule } from "./cars/cars.module";
import { ContactModule } from "./contact/contact.module";
import { PricingModule } from "./pricing/pricing.module";
import { ServiceModule } from "./service/service.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,
    HomeModule, BookModule, CarsModule, ContactModule,
    PricingModule, ServiceModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
