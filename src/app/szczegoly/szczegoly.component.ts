import { Component, OnInit, Input } from '@angular/core';
import { Samochod } from 'src/samochod';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

@Input() samochodSzczegoly!:Samochod;

  constructor() { }

  ngOnInit(): void {
  }

}
