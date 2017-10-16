import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './../weather-api.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather;
  avg: number ;
  maxTemp : number;
  minTemp : number;
  humidity : number;
  clouds : string;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit() {
    this.weather = this.weatherService.getCity('burbank')
    .then( weather => {
      this.avg = Math.floor(weather.main.temp * (9/5) - 459.67);
      this.maxTemp = weather.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67);
      this.minTemp = weather.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67);
      this.clouds = weather.weather[0].description;
      this.humidity = weather.main.humidity;

    });

  }

}
