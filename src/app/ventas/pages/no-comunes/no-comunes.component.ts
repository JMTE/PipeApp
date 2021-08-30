import { Component, OnInit } from '@angular/core';

import {FieldsetModule} from 'primeng/fieldset';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre:string="Jose Maria";
  genero:string="masculino";
  invitacionMap={

    "masculino":"Bienvenido",
    "femenino":"Bienvenida"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
