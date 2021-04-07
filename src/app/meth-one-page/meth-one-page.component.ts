import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meth-one-page',
  templateUrl: './meth-one-page.component.html',
  styleUrls: ['./meth-one-page.component.css']
})
export class MethOnePageComponent implements OnInit {

  method = 'Изъятие нескольких уровней в диапазоне канала'
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
