import { Component, OnInit } from '@angular/core';

import {FieldsetModule} from 'primeng/fieldset';

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

  constructor() { }

  ngOnInit(): void {
  }

}
