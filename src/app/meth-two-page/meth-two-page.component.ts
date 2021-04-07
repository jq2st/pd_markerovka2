import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meth-two-page',
  templateUrl: './meth-two-page.component.html',
  styleUrls: ['./meth-two-page.component.css']
})
export class MethTwoPageComponent implements OnInit {

  method = 'Введение штрихового кода в тоновый диапазон канала RGB'
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
