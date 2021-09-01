import { Pipe, PipeTransform } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Color, Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor:string ="sin valor"): Heroe[] {

    switch(ordenarPor){

      case "nombre":

      return value.sort((a ,b) =>{

        if (a.nombre > b.nombre){
          return 1
        }else{
          return -1
        }
      });


      case "vuela":
        return value.sort((a,b)=>{
          if (a.vuela>b.vuela){
            return -1
          }else{
            return 1
          }
        });

        case "color":
        return value.sort((a,b)=>{
          if (a.color>b.color){
            return 1
          }else{
            return -1
          }
        })


      default: 

      return value;
    }


   
    

    
  }

}
