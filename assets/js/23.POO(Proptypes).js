function Tiburon(nombre,cientifico){
    this.nombre=nombre;
    this.cientifico=cientifico;
}

//metodos 
Tiburon.prototype.atacar=function(){
    console.log(this.nombre + ': cuidado fuera del agua')
}

//instancia de tiburon 
const tintorera=new Tiburon('tintorera','prionace glauca')
tintorera.atacar()

const tiburon2 = new Tiburon("Tiburon", 'Tiburon')
tiburon2.atacar();

//Herencia en los prototipos 

function TiburonToro(nombre,cientifico,peligrosidad){
    this.super=Tiburon
    this.super(nombre,cientifico)
    this.peligrosidad=peligrosidad
}

//instancia de tiburon toro 
const costero=TiburonToro.prototype=new Tiburon()
TiburonToro.prototype.constructor=Tiburon

//sobreescritura de metodos 
TiburonToro.prototype.atacar=function(){
    console.log('Cuidado fuera del agua ,toro en las proximidades')
}

//metodos 
TiburonToro.prototype.mutilar=function(){
    console.log('Riesgo de amputacion si se produce un ataque')
}

//costero.atacar()
//costero.mutilar()




