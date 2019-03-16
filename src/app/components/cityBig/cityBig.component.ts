import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { City } from "../../models/weather.model";

@Component({
  selector: "app-city-big",
  templateUrl: "./cityBig.component.html",
  styleUrls: ["./cityBig.component.css"]
})
export class CityBigComponent {
  city: City;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe((data: City) => {
      this.city = data;
    });
  }
}
