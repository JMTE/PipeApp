import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  cambiaMayusculas:boolean=true;
  nombre:string="jmte"
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
  

}
