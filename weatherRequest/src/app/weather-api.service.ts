import { Injectable } from '@angular/core';
//Import http
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class WeatherApiService {

  constructor(private _http: Http) { }
    getCity(city){
      if(city){
        return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=01ac7a798d49652025fac9ceda765bfd`).map( data => data.json() ).toPromise();
      }
    }
}
