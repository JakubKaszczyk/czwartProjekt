import { Component } from '@angular/core';
import { Samochod } from 'src/samochod';
import { SAMOCHODY } from 'src/samochody';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'samochody';
  samochodziki:Samochod[] = SAMOCHODY;
  wybraneAutko!:Samochod;
  wyswietl(jakiesAutko:Samochod):void{
    this.wybraneAutko = jakiesAutko;
  }
}
