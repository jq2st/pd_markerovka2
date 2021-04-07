import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';

@Component({
  selector: 'app-meth-three-step1',
  templateUrl: './meth-three-step1.component.html',
  styleUrls: ['./meth-three-step1.component.css']
})
export class MethThreeStep1Component implements OnInit {

  @ViewChild('m3s1c1', {static: false}) canvas: ElementRef
  @ViewChild('m3s1c2', {static: false}) canvasChannels: ElementRef
  @ViewChild('m3s1c3', {static: false}) canvasCode: ElementRef
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  pic = new Image()
  code = new Image()
  imgDivHeight = 300
  imgDivWidth = 0
  imgUrl = ''
  codeUrl = ''
  choosenChannel = ''

  channelUrlR = ''
  channelUrlG = ''
  channelUrlB = ''
 
  constructor(private methThreeDataService: MethThreeDataService) { }

  ngOnInit() {

  }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
	  this.reader.onload = () => {
      let ctx = this.canvas.nativeElement.getContext('2d')
      this.pic.onload = () => {
        this.choosenChannel = ''
        this.methThreeDataService.fullZeroing()
        this.methThreeDataService.picParams = {width: this.pic.width, height: this.pic.height}
        this.canvas.nativeElement.width = this.pic.width
        this.canvas.nativeElement.height = this.pic.height
        ctx.drawImage(this.pic, 0, 0)
        this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
        this.imgDivWidth = this.pic.width * (this.imgDivHeight / this.pic.height)
        this.devideOnChannels(ctx)
        this.isImageLoaded = true
        this.isLoading = false
      }
      this.pic.src = this.reader.result as string
    }
    this.reader.readAsDataURL(files[0])
  }

  addCode(files) {
	  this.reader.onload = () => {
      let ctx = this.canvasCode.nativeElement.getContext('2d')
      this.code.onload = () => {
        this.choosenChannel = ''
        this.methThreeDataService.codeZeroing()
        this.methThreeDataService.codeParams = {width: this.code.width, height: this.code.height}
        this.canvasCode.nativeElement.width = this.code.width
        this.canvasCode.nativeElement.height = this.code.height
        ctx.drawImage(this.code, 0, 0)
        this.methThreeDataService.codeData = ctx.getImageData(0, 0, this.canvasCode.nativeElement.width, this.canvasCode.nativeElement.height)
        this.codeUrl = this.canvasCode.nativeElement.toDataURL('image/jpeg')
        this.imgDivWidth = this.code.width * (this.imgDivHeight / this.code.height)
      }
      this.code.src = this.reader.result as string
    }
    this.reader.readAsDataURL(files[0])
  }

  devideOnChannels(ctx) {
    let pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    let ctxChannels = this.canvasChannels.nativeElement.getContext('2d')
    this.canvasChannels.nativeElement.width = this.canvas.nativeElement.width;
    this.canvasChannels.nativeElement.height = this.canvas.nativeElement.height;
    for (let i = 0; i < pixelData.data.length; i += 4) {
      this.methThreeDataService.arrChannelR.push(pixelData.data[i + 0])
      this.methThreeDataService.arrChannelG.push(pixelData.data[i + 1])
      this.methThreeDataService.arrChannelB.push(pixelData.data[i + 2])
      this.methThreeDataService.arrChannelA.push(pixelData.data[i + 3])
    }
    for (let i = 0; i < pixelData.data.length; i += 4) {
      this.methThreeDataService.channelPixArrR.push(pixelData.data[i], 0 , 0, 0)
      this.methThreeDataService.channelPixArrG.push(0, pixelData.data[i + 1] , 0, 0)
      this.methThreeDataService.channelPixArrB.push(0, 0, pixelData.data[i + 2], 0)
      this.methThreeDataService.channelPixArrA.push(0, 0 , 0, pixelData.data[i + 3])
    }
    for (let i = 0; i < pixelData.data.length; i += 4) {
      pixelData.data[i + 0] = this.methThreeDataService.channelPixArrR[i + 0]
      pixelData.data[i + 1] = this.methThreeDataService.channelPixArrR[i + 1]
      pixelData.data[i + 2] = this.methThreeDataService.channelPixArrR[i + 2]
    }
    ctxChannels.putImageData(pixelData, 0, 0)
    this.channelUrlR = this.canvasChannels.nativeElement.toDataURL('image/jpeg')
    for (let i = 0; i < pixelData.data.length; i += 4) {
      pixelData.data[i + 0] = this.methThreeDataService.channelPixArrG[i + 0]
      pixelData.data[i + 1] = this.methThreeDataService.channelPixArrG[i + 1]
      pixelData.data[i + 2] = this.methThreeDataService.channelPixArrG[i + 2]
    }
    ctxChannels.putImageData(pixelData, 0, 0)
    this.channelUrlG = this.canvasChannels.nativeElement.toDataURL('image/jpeg')
    for (let i = 0; i < pixelData.data.length; i += 4) {
      pixelData.data[i + 0] = this.methThreeDataService.channelPixArrB[i + 0]
      pixelData.data[i + 1] = this.methThreeDataService.channelPixArrB[i + 1]
      pixelData.data[i + 2] = this.methThreeDataService.channelPixArrB[i + 2]
    }
    ctxChannels.putImageData(pixelData, 0, 0)
    this.channelUrlB = this.canvasChannels.nativeElement.toDataURL('image/jpeg')
  }

  chooseChannel(channel) {
    this.isChoosen = true
    this.choosenChannel = channel
    this.methThreeDataService.choosenChannel = channel
  }

  nextStep() {
    this.onNext.emit(null)
  }
}
