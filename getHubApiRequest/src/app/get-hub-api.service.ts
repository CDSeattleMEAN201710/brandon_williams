import { Injectable } from '@angular/core';
//Import http
import { Http } from '@angular/http';
import "rxjs";


@Injectable()
export class GetHubApiService {

  //Inject http
  constructor(private _http: Http) { }
  //Method to retrieve user
  getUser(user) {
    if (user) {
  return this._http.get(`https://api.github.com/users/${user}`).map( data => data.json() ).toPromise();
    }
  }

}
