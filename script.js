
class Ninja {
    constructor (name,salud,velocidad,fuerza,sabiduria){
    this.name= name;
    this.salud=salud||100;
    this.velocidad=velocidad||3;
    this.fuerza=fuerza||3;
    this.sabiduria=sabiduria||3;
    }
    drinkSake() {
        this.salud += 10;
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
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor (name){
        super(name);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10
}
speakWisdom(){
    //agrega 10 a la salud del Sensei
    super.drinkSake()
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
}
showStats(){
    console.log (superSensei)
}
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

