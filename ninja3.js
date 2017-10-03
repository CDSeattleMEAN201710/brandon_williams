class Ninja{
    constructor(name){
        this.name = name;
        this.health = 1000;
        this.speed = 3;
        this.strength = 3;
    }
    showStats(){
        console.log("Name: "+ this.name+"\n"+ "Health: "+ this.health + "\n" + "Speed: "+this.speed+ "\n" + "Strength: " + this.strength)
        return this
    }
    drinkSake(){
        this.health += 10;
        return this
    }
    sayName(){
        console.log(`My Ninja name is ${this.name}`)
        return this
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("I am wise");
        return this;
    }
}

var brandon = new Ninja("Brandon")
// brandon.drinkSake().showStats()
var reggie = new Sensei('Reggie');
reggie.speakWisdom().showStats()