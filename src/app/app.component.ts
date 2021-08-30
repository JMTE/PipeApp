import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private PrimeNGConfig :PrimeNGConfig){


 }
 
 ngOnInit() {
  
  this.PrimeNGConfig.ripple=true;
 }
}
