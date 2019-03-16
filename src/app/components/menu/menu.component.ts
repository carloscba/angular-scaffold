import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { City } from "../../models/weather.weather.model";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent {
  constructor(private dataService: DataService) {}

  loadCity(cityId: Number): void {
    this.dataService.loadCity(cityId);
  }

  ngOnInit() {}
}
