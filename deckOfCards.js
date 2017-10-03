class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
    showCard(){
        console.log("This is the "+this.value + " of "+ this.suit)
        return this;
    }
}

class Deck{
    constructor(){
        this.deck = this.createDeck();
    }
    createDeck(){
        var new_deck = []
        var list_of_suits = ["Hearts","Clubs","Diamonds","Spades"];
        var list_of_values = ["Ace","2","3","4","5","6","7",'8','9','10','Jack','Queen',"King"]
        for(var idx in list_of_suits){
            for(var idxx in list_of_values){
                new_deck.push(new Card(list_of_values[idxx], list_of_suits[idx]))
            }
        }
        return new_deck;
    }
    drawCard(){
        return this.deck.pop()
    }
    deal(player){
        let random_idx = Math.trunc(Math.random()*52)
        let card = this.deck[random_idx];
        this.deck.splice(random_idx,1)
        player.hand.push(card);
    }
    shuffle(){
        for(var idx = 0; idx < this.deck.length; idx++){
            let random_idx = Math.trunc(Math.random()*52)
            //Swap elements
            let temp = this.deck[idx];
            this.deck[idx]= this.deck[random_idx]
            this.deck[random_idx]= temp
        }
        return this;    
    }
    reset(){
        this.deck = []
        var list_of_suits = ["Hearts","Clubs","Diamonds","Spades"];
        var list_of_values = ["Ace","2","3","4","5","6","7",'8','9','10','Jack','Queen',"King"]
        for(var idx in list_of_suits){
            for(var idxx in list_of_values){
                this.deck.push(new Card(list_of_values[idxx], list_of_suits[idx]))
            }
        }
        return this;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
       deck.deal(this);
       return this;
       
    }
    discard(){
        this.hand.pop();
        return this;
    }
    showHand(){
        return this.hand;
    }
    
}

let deck = new Deck;

console.log(deck)

let brandon = new Player("Brandon")
console.log(brandon.draw(deck).showHand());
console.log(deck)



