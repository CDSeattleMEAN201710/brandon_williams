import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetHubApiService } from './get-hub-api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetHubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
