import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DataComponent } from "./components/data.component";
import { DataService } from "./services/data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
