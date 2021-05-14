import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { MethFiveDataService } from 'src/app/services/meth-five-data.service';

@Component({
  selector: 'app-meth-five-step1',
  templateUrl: './meth-five-step1.component.html',
  styleUrls: ['./meth-five-step1.component.css']
})
export class MethFiveStep1Component {

  @ViewChild('m5s1c1') canvas: ElementRef
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  pic = new Image()
  imgDivHeight = 300
  imgDivWidth = 0
  imgUrl = ''

  constructor(
    private rgbCmykService: RgbCmykService,
    private methFiveDataService: MethFiveDataService,
  ) { }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
	  this.reader.onload = () => {
      let ctx = this.canvas.nativeElement.getContext('2d')
      this.pic.onload = () => {
        this.methFiveDataService.fullZeroing()
        this.methFiveDataService.picParams = {width: this.pic.width, height: this.pic.height}
        this.canvas.nativeElement.width = this.pic.width
        this.canvas.nativeElement.height = this.pic.height
        ctx.drawImage(this.pic, 0, 0)
        this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
        this.imgDivWidth = this.pic.width * (this.imgDivHeight / this.pic.height)
        this.devideOnChannels(ctx)
        this.renderImage(ctx)
        this.isImageLoaded = true
        this.isLoading = false
      }
      this.pic.src = this.reader.result as string
    }
    this.reader.readAsDataURL(files[0])
  }

  devideOnChannels(ctx) {
    let pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    for (let i = 0; i < pixelData.data.length; i += 4) {
      let new_cmyk = this.rgbCmykService.rgb2cmyk(pixelData.data[i], pixelData.data[i + 1], pixelData.data[i + 2])
      this.methFiveDataService.arrChannelC.push(Math.floor(new_cmyk.c))
      this.methFiveDataService.arrChannelM.push(Math.floor(new_cmyk.m))
      this.methFiveDataService.arrChannelY.push(Math.floor(new_cmyk.y))
      this.methFiveDataService.arrChannelK.push(Math.floor(new_cmyk.k))
    }
  }

  renderImage(ctx) {
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.methFiveDataService.newImageArray[i + 0]
      imageData.data[i + 1] = this.methFiveDataService.newImageArray[i + 1]
      imageData.data[i + 2] = this.methFiveDataService.newImageArray[i + 2]
      imageData.data[i + 3] = this.methFiveDataService.newImageArray[i + 3]
    }
    ctx.putImageData(imageData, 0, 0)
  }

  nextStep() {
    this.onNext.emit(null)
  }
}
