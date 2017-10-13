import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  list_of_quotes: Array<Quote>;
  quote: Quote;

  constructor (){};

  ngOnInit(){
    this.quote = new Quote;
    this.list_of_quotes = [];
  };

  addQuote(){
    console.log("something happened")
    this.quote.rating = 0;
    this.list_of_quotes.push(this.quote);
    this.quote = new Quote;
  }

}
