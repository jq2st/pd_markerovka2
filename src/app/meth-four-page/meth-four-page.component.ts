import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meth-four-page',
  templateUrl: './meth-four-page.component.html',
  styleUrls: ['./meth-four-page.component.css']
})
export class MethFourPageComponent implements OnInit {

  method = 'Изъятие 20-30 уровней в диапазоне'
  step: number = 1

  constructor() { }

  ngOnInit() {
  }

  lastStep() {
    this.step--;
  }
  nextStep() {
    this.step++;
  }
}
