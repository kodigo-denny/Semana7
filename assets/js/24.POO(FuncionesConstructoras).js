const automovil=function(color,marca,velocidadMax){
   this.color=color
   this.marca=marca 
   this.velocidadMax=velocidadMax

   this.acelerar=function(){
       return 'Estoy acelerando a tope'
   }
}

const seat=new automovil('rojo','seat',200)
const hilux = new automovil('blanco', 'Toyota', 190)

console.log(seat.acelerar())

console.log(seat.velocidadMax)

console.log(hilux.velocidadMax)