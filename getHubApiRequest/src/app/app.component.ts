import { Component } from '@angular/core';
import { GetHubApiService } from './get-hub-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists = null;
  score: number = 0;
  user: string = '';
  promise = null;

  //Inject api service when component is constucted
  constructor(private _api:GetHubApiService) {}

  calculate() {
    this.promise = this._api.getUser(this.user)
    if (this.promise) {
      this.promise.then( (user) => {
          this.score = user.public_repos + user.followers;
          this.userExists = true;
      })
      .catch( (err) => {this.userExists = false} );
    } else {
      this.userExists = false;
    }
  }

}
