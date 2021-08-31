import { Component, OnInit } from '@angular/core';

import {FieldsetModule} from 'primeng/fieldset';


import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre:string="Jose Maria";
  genero:string="masculino";
  invitacionMap={

    "masculino":"Bienvenido",
    "femenino":"Bienvenida"

  }

   //i18PluralSelect

   clientes:string[]=["Jose", "Maria","Juan", "Sofia"]
   clientesMap={
    "=0": "No tenemos ningun cliente esperando",
    "=1": "tenemos un cliente esperando",
    "other":"tenemos # clientes esperando"
    
   }

   //KeyValue Pipe

   persona={

    nombre:" Jose Maria",
    edad : ' 40',
    direccion:" Madrid, España"
   }

   //JSON Pipe

   heroes =[
     {
     nombre: "Goku",
    vuela:true
  }, 
    {
      nombre: "Ironman",
      vuela:true
},
    {
     nombre:"Vegeta",
    vuela:true
}, 
   {
     nombre:"Thor",
    vuela:false
  }, 
   {
     nombre:"Batman",
  vuela:false
}
]


  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){

    if (this.genero=="masculino"){
      this.genero="femenino";
      this.nombre="Sofia"
    }else if (this.genero=="femenino"){
      this.genero="masculino";
      this.nombre="Jose Maria"
    }
  }

  borrarCliente(){

    this.clientes.splice(0,1)

  }

}
