import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MethTwoDataService } from 'src/app/services/meth-two-data.service';

@Component({
  selector: 'app-meth-two-step2',
  templateUrl: './meth-two-step2.component.html',
  styleUrls: ['./meth-two-step2.component.css']
})
export class MethTwoStep2Component implements OnInit {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  codeNum: string = ''

  constructor(private methTwoDataService: MethTwoDataService) { }

  ngOnInit() {
  }

  generateNewImage(newChannel, channel) {
    let newPixel
    for (let i = 0; i < newChannel.length; i++) {
      switch(channel) {
        case 'r':
          newPixel = {r: newChannel[i], g: this.methTwoDataService.arrChannelG[i], b: this.methTwoDataService.arrChannelB[i], a: this.methTwoDataService.arrChannelA[i]}
        break
        case 'g':
          newPixel = {r: this.methTwoDataService.arrChannelR[i], g: newChannel[i], b: this.methTwoDataService.arrChannelB[i], a: this.methTwoDataService.arrChannelA[i]}
        break
        case 'b':
          newPixel = {r: this.methTwoDataService.arrChannelR[i], g: this.methTwoDataService.arrChannelG[i], b: newChannel[i], a: this.methTwoDataService.arrChannelA[i]}
        break
      }
      this.methTwoDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, newPixel.a)
    }
  }

  lastStep() {
    this.onLast.emit(null)
  }
  
  nextStep() {
    let newCodeNumArr
    switch(this.methTwoDataService.choosenChannel) {
      case 'r':
        newCodeNumArr = this.methTwoDataService.arrChannelR
        break
      case 'g':
        newCodeNumArr = this.methTwoDataService.arrChannelG
        break
      case 'b':
        newCodeNumArr = this.methTwoDataService.arrChannelB
        break
    }
    this.codeNum.split('').forEach((i, idx) => {
      if (+i == 0) {
        newCodeNumArr = newCodeNumArr.map(n => {
          if (n == idx) {
            return n += 1
          }
          else {
            return n
          }
        })
      }
    })
    this.generateNewImage(newCodeNumArr, this.methTwoDataService.choosenChannel)
    this.methTwoDataService.newChoosenChannel = newCodeNumArr
    this.onNext.emit(null)
  }
}
