import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { CitySmallComponent } from "./components/citySmall/citySmall.component";
import { CityBigComponent } from "./components/cityBig/cityBig.component";
import { DataService } from "./services/data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CitySmallComponent,
    CityBigComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
