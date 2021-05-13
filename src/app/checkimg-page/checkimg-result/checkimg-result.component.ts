import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkimg-result',
  templateUrl: './checkimg-result.component.html',
  styleUrls: ['./checkimg-result.component.css']
})
export class CheckimgResultComponent implements OnInit {

  @Input('result') inResult
  @Output() onClose: EventEmitter<any> = new EventEmitter()

  result = {}
  compare = {
    1: 'Изъятие нескольких уровней в диапазоне канала',
    2: 'Введение штрихового кода в тоновый диапазон канала RGB',
    3: 'Введение 2D штрихового кода (QR) в цифровое изображение',
    4: 'Изъятие 20-30 уровней в диапазоне',
    5: 'Введение флуоресцентного тонера'
  }

  constructor() { }

  ngOnInit() {
    console.log(this.inResult)
    this.result = {result: this.inResult.result ? 'метка присутствует.' : 'метка отсутствует.', info: this.inResult.info == 'none' ? '' : this.inResult.info, method: this.compare[this.inResult.type]}
  }

  close() {
    this.onClose.emit(true)
  }

}
