import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Country } from "../models/country.model";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Injectable()
export class DataService {
  public countriesNumber = 0;
  public countriesObservable: Observable<Country[]>;
  private requestOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Key": environment.RapidAPI
    })
  };

  constructor(private http: HttpClient) {}

  get() {
    return (this.countriesObservable = this.http
      .get(
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/es-ES",
        this.requestOptions
      )
      .map(
        (data: Object[]): Country[] => {
          return data.Countries.map(
            country => new Country(country.Name, country.Code)
          );
        }
      ));
  }
}
