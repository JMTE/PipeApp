import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  cambiaMayusculas:boolean=true;
  nombre:string="jmte"

  ordenarPor:string=""

  heroes:Heroe[]=[ 
    {
    nombre:"Superman",
    vuela:true,
    color:Color.azul
  },
  {
    nombre:"Batman",
    vuela:false,
    color:Color.negro
  },
  {
    nombre:"Capitan America",
    vuela:false,
    color:Color.azul
  },
  {
    nombre:"Linterna Verde",
    vuela:true,
    color:Color.verde
  },
  {
    nombre:"Daredevil",
    vuela:true,
    color:Color.rojo
  }

]
  constructor() { }

  ngOnInit(): void {
  }

  cambiaMay(){
    if(this.cambiaMayusculas){
      this.cambiaMayusculas=false;
    }else{
      this.cambiaMayusculas=true;
    }

    console.log(this.cambiaMayusculas);
    
    
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }



  
  

}
