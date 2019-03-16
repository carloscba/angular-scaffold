import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent {
  title = "CodeSandbox";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.get().subscribe(
      data => {
        this.dataService.countriesNumber = data.length;
      },
      error => {
        console.log(error);
      }
    );
  }
}
