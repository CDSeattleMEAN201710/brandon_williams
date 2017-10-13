import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})

export class QuoteListComponent implements OnInit {
  @Input() list_of_quotes: Array<Quote>;
  quote: Quote;

  constructor() { }

  ngOnInit() {

  };

  voteUp(idx){
    let quote = this.list_of_quotes[idx];
    quote.rating ++;
  };

  voteDown(idx){
    let quote = this.list_of_quotes[idx];
    quote.rating --;
  };

  delete(idx){
    this.list_of_quotes.splice(idx,1)

  }

}
