import { Pipe, PipeTransform } from "@angular/core";


@Pipe({

    name:"mayusculas"
})

export class MayusculasPipe implements PipeTransform{

    transform(value:string, funciona:boolean=true):string{
        if(funciona){
            return value.toUpperCase();
        }else{
            return value;
        }
       
    }


}