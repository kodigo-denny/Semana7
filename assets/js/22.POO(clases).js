class Automovil{
    constructor(marca,modelo,fechaLanzamiento,combustible,color, velMax){
        this.marca=marca
        this.modelo=modelo 
        this.fechaLanzamiento=fechaLanzamiento
        this.combustible=combustible 
        this.color=color
        this.velocidadActual = 0
        this.velMax = velMax
    }

    //getter 
    get getColor(){
         return this.color
     }

    //setter 
    set setColor(color){
        this.color=color
    }
    //métodos
    velocidad(velocidad){
        if(velocidad>200){
            return "Ya no debes acelerar más esto es el máximo ¡¡¡PELIGRO!!"
        }else{
            return `Para alcanzar tu velocidad máxima faltan ${200-velocidad}Km/h`
        }
    }

    acelerar(){
        if(this.velocidadActual+10 <= this.velMax)
            this.velocidadActual = this.velocidadActual + 10;
    }

    bajar(){
        if(this.velocidadActual-10 >= 0)
            this.velocidadActual = this.velocidadActual - 10
    }
    //métodos estáticos 
    static ruedas(){
        return "Tengo las ruedas de serie"
    }
}

//instancias de clase 

const coche=new Automovil('seat','ibiza',2015,'gasolina','rojo', 180)
const coche2 = new Automovil('Toyota', 'Hilux', 2019, 'Diesel', 'Azul', 190)
const coche3 = new Automovil('Honda', 'Civic', 2020, 'Gasolina', 'Negro', 200)


const label1 = document.querySelector('#label1')
const label2 = document.querySelector('#label2')
const label3 = document.querySelector('#label3')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

const carro1 = document.querySelector('#carro1')
const carro2 = document.querySelector('#carro2')
const carro3 = document.querySelector('#carro3')

const bajar1 = document.querySelector('#bajar1')
const bajar2 = document.querySelector('#bajar2')
const bajar3 = document.querySelector('#bajar3')

label1.innerHTML = coche.modelo
label2.innerHTML = coche2.modelo
label3.innerHTML = coche3.modelo

btn1.addEventListener('click', (e) =>{
    coche.acelerar()
    carro1.value = coche.velocidadActual + " KM/H"
})

btn2.addEventListener('click', (e) =>{
    coche2.acelerar()
    carro2.value = coche2.velocidadActual + " KM/H"
})

btn3.addEventListener('click', (e) =>{
    coche3.acelerar()
    carro3.value = coche3.velocidadActual + " KM/H"
})

bajar1.addEventListener('click', (e) =>{
    coche.bajar()
    carro1.value = coche.velocidadActual + " KM/H"
})

bajar2.addEventListener('click', (e) =>{
    coche2.bajar()
    carro2.value = coche2.velocidadActual + " KM/H"
})

bajar3.addEventListener('click', (e) =>{
    coche3.bajar()
    carro3.value = coche3.velocidadActual + " KM/H"
})

console.log(coche)
console.log(coche2)
console.log(coche3)
/*
document.write(coche.marca+'<br>')
document.write(coche2.marca+'<br>')
document.write(coche3.marca+'<br>')

document.write(coche.getColor+'<br>')
coche.setColor = 'Blanco'
document.write(coche.getColor+'<br>')

document.write(Automovil.ruedas())

coche.setColor='verde'
console.log(coche.getColor)

document.write(coche.velocidad(100)+'<br>')
*/
//console.log(coche.velocidad(100))
//console.log(Automovil.ruedas())

//Herencia  
//constructor de clase heredada primero ponemos 
//las caracteristicas propias y luego lo que heredo 

//En el super solo lo que heredamos

class Nautica extends Automovil {
     constructor(marca,modelo,materialCasco,tipoMotor){
          super(marca,modelo)
         
          this.materialCasco=materialCasco
          this.tipoMotor=tipoMotor
    }
}

//Instancia de aeronave 

const titanic=new Nautica('metal','carbón','titanic','titanicModel')

//console.log(titanic.color='verde')
