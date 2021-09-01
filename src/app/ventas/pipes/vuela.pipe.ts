import { Pipe, PipeTransform } from "@angular/core";


@Pipe({

    name:"vuela"
})

export class VuelaPipe implements PipeTransform{

    transform(value:boolean):string{
        if(value){
            return "Puede volar"
        }else{
            return "No puede volar";
        }
       
    }


}