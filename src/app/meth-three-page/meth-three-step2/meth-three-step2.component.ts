import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';
import { fromEvent, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-meth-three-step2',
  templateUrl: './meth-three-step2.component.html',
  styleUrls: ['./meth-three-step2.component.css']
})
export class MethThreeStep2Component implements OnInit {

  isChoosen: boolean = false
  pixelArrObj
  defaultPixelArr
  codePosition
  @ViewChild('m3s2c1', {static: true}) canvas: ElementRef
  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  constructor(private methThreeDataService: MethThreeDataService) { }

  ngOnInit() {
    let channelPixArr = []
    this.canvas.nativeElement.width = this.methThreeDataService.picParams.width
    this.canvas.nativeElement.height = this.methThreeDataService.picParams.height
    let ctx = this.canvas.nativeElement.getContext('2d')
    let pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    switch(this.methThreeDataService.choosenChannel) {
      case 'r': 
        channelPixArr = this.methThreeDataService.channelPixArrR
      break
      case 'g': 
        channelPixArr = this.methThreeDataService.channelPixArrG
      break
      case 'b': 
        channelPixArr = this.methThreeDataService.channelPixArrB
      break
    }
    for (let i = 0; i < pixelData.data.length; i += 4) {
      pixelData.data[i + 0] = channelPixArr[i + 0]
      pixelData.data[i + 1] = channelPixArr[i + 1]
      pixelData.data[i + 2] = channelPixArr[i + 2]
      pixelData.data[i + 3] = 255
    }
    ctx.putImageData(pixelData, 0 , 0)
    this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.defaultPixelArr = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    let mouswMove$: Observable<MouseEvent> = fromEvent(this.canvas.nativeElement, 'mousemove')
    let mouseout$: Observable<MouseEvent> = fromEvent(this.canvas.nativeElement, 'mouseout')
    mouswMove$
    .pipe(
      map(e => ({x: e.offsetX, y: e.offsetY}))
    ).subscribe((p) => {
      this.showCode(p, ctx)
    })
  }

  showCode(position, context) {
    context.putImageData(this.pixelArrObj, 0, 0)
    context.strokeStyle = 'gold';
    context.lineWidth = 10;
    context.strokeRect(position.x, position.y, this.methThreeDataService.codeParams.width, this.methThreeDataService.codeParams.height)
  }

  renderCode(e) {
    this.codePosition = {x: e.offsetX, y: e.offsetY}
    let ctx = this.canvas.nativeElement.getContext('2d')
    ctx.putImageData(this.defaultPixelArr, 0, 0)
    ctx.putImageData(this.methThreeDataService.codeData, e.offsetX, e.offsetY)
    this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.isChoosen = true
  }

  generateNewImage(newChannel, channel) {
    let newPixel
    for (let i = 0; i < newChannel.length; i++) {
      switch(channel) {
        case 'r':
          newPixel = {r: newChannel[i], g: this.methThreeDataService.arrChannelG[i], b: this.methThreeDataService.arrChannelB[i], a: this.methThreeDataService.arrChannelA[i]}
        break
        case 'g':
          newPixel = {r: this.methThreeDataService.arrChannelR[i], g: newChannel[i], b: this.methThreeDataService.arrChannelB[i], a: this.methThreeDataService.arrChannelA[i]}
        break
        case 'b':
          newPixel = {r: this.methThreeDataService.arrChannelR[i], g: this.methThreeDataService.arrChannelG[i], b: newChannel[i], a: this.methThreeDataService.arrChannelA[i]}
        break
      }
      this.methThreeDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    let newCodeNumArr
    let codeData = this.methThreeDataService.codeData.data
    let startX = this.codePosition.x
    let startY = this.codePosition.y
    let codeHeight = this.methThreeDataService.codeParams.height
    let codeWidth = this.methThreeDataService.codeParams.width
    switch(this.methThreeDataService.choosenChannel) {
      case 'r':
        newCodeNumArr = this.methThreeDataService.arrChannelR
        break
      case 'g':
        newCodeNumArr = this.methThreeDataService.arrChannelG
        break
      case 'b':
        newCodeNumArr = this.methThreeDataService.arrChannelB
        break
    }
    let c = 0
    for (let y = startY; y < (startY + codeHeight); y++) {
      for (let x = startX; x < (startX + codeWidth); x++) {
        if (codeData[c] == 0 && codeData[c + 1] == 0 && codeData[c + 2] == 0) {
          newCodeNumArr[this.methThreeDataService.picParams.width * y + x] = 255
        }
        // else {
        //   newCodeNumArr[this.methThreeDataService.picParams.width * y + x] = 0
        // }
        c += 4
      }
    }
    this.generateNewImage(newCodeNumArr, this.methThreeDataService.choosenChannel)
    this.methThreeDataService.newChoosenChannel = newCodeNumArr
    this.onNext.emit(null)
  }
}
