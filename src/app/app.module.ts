import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNGModule } from './prime-ng/primeng.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
