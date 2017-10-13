import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
