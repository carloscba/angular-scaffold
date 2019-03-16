import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { City } from "../../models/weather.model";

@Component({
  selector: "app-city-small",
  templateUrl: "./citySmall.component.html",
  styleUrls: ["./citySmall.component.css"]
})
export class CitySmallComponent {
  city: City;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe((data: City) => {
      this.city = data;
    });
  }
}
