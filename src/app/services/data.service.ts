import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { City } from "../models/weather.model";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  private appId = "75b9a089c02b1908b7a99cd78d35ee01";
  private dataSource = new BehaviorSubject<City>({});
  private currentCity: City;
  public data = this.dataSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadCity(cityId: Number) {
    this.currentCity.id !== cityId && this.loadData(cityId);
  }

  refresh(city: City): void {
    this.currentCity = city;
    this.dataSource.next(this.currentCity);
  }

  loadData(cityId: Number = 3832780): Observable<City> {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${
          this.appId
        }`
      )
      .map(data => {
        return new City(
          data.city.id,
          data.city.name,
          data.city.coord,
          data.city.country
        );
      })
      .subscribe((data: City) => {
        this.refresh(data);
      });
  }
}
