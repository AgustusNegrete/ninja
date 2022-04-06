
class Ninja {
    constructor (name,salud,velocidad,fuerza){
    this.name= name;
    this.salud=salud||100;
    this.velocidad=velocidad||3;
    this.fuerza=fuerza||3;
    }
    drinkSake() {
        this.salud += 10;
        console.log(this.salud)
    }
    showStats(){
        console.log(ninja1)
    }
    sayName(){
        console.log(this.name)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


