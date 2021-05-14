import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meth-three-page',
  templateUrl: './meth-three-page.component.html',
  styleUrls: ['./meth-three-page.component.css']
})
export class MethThreePageComponent implements OnInit {
  
  method = 'Введение 2D штрихового кода (QR) в цифровое изображение'
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
