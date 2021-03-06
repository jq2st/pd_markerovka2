import { Component, EventEmitter, Output } from '@angular/core';
import { MethOneDataService } from 'src/app/services/meth-one-data.service';

@Component({
  selector: 'app-meth-one-step2',
  templateUrl: './meth-one-step2.component.html',
  styleUrls: ['./meth-one-step2.component.css']
})
export class MethOneStep2Component {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  num: string = '1'

  constructor(private methOneDataService: MethOneDataService) { }

  generateNewImage(newChannel, channel) {
    let newPixel
    for (let i = 0; i < newChannel.length; i++) {
      switch(channel) {
        case 'r':
          newPixel = {r: newChannel[i], g: this.methOneDataService.arrChannelG[i], b: this.methOneDataService.arrChannelB[i], a: this.methOneDataService.arrChannelA[i]}
        break
        case 'g':
          newPixel = {r: this.methOneDataService.arrChannelR[i], g: newChannel[i], b: this.methOneDataService.arrChannelB[i], a: this.methOneDataService.arrChannelA[i]}
        break
        case 'b':
          newPixel = {r: this.methOneDataService.arrChannelR[i], g: this.methOneDataService.arrChannelG[i], b: newChannel[i], a: this.methOneDataService.arrChannelA[i]}
        break
      }
      this.methOneDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  randomUniqInt(min, uniqArr, arr) {
    let newRandomK = min + Math.floor((uniqArr.length - min) * Math.random())
    let newRandomInt = uniqArr[newRandomK]
    if (!arr.includes(newRandomInt)) return newRandomInt
    else this.randomUniqInt(min, uniqArr, arr)
  }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    let newCodeNumArr
    let randomColorValues = []
    switch(this.methOneDataService.choosenChannel) {
      case 'r':
        newCodeNumArr = this.methOneDataService.arrChannelR
        break
      case 'g':
        newCodeNumArr = this.methOneDataService.arrChannelG
        break
      case 'b':
        newCodeNumArr = this.methOneDataService.arrChannelB
        break
    }
    let set = new Set(newCodeNumArr);
    let uniqArr = Array.from(set);
    for (let i = 0; i < +this.num; i++) {
      randomColorValues.push(this.randomUniqInt(0, uniqArr, randomColorValues))
    }
    newCodeNumArr.forEach((n, i, arr) => {
      if (randomColorValues.includes(n)) {
        arr[i] += 1
      }
    })
    this.generateNewImage(newCodeNumArr, this.methOneDataService.choosenChannel)
    this.methOneDataService.newChoosenChannel = newCodeNumArr
    this.onNext.emit(null)
  }
}
