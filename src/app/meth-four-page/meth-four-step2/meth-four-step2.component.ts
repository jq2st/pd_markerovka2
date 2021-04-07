import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';

@Component({
  selector: 'app-meth-four-step2',
  templateUrl: './meth-four-step2.component.html',
  styleUrls: ['./meth-four-step2.component.css']
})
export class MethFourStep2Component implements OnInit {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  codeNum: string = '20'

  constructor(private rgbCmykService: RgbCmykService, private methFourDataService: MethFourDataService) { }

  ngOnInit() {
  }

  lastStep() {
    this.onLast.emit(null)
  }
  
  nextStep() {
    let min = Math.floor(Math.random() * (50 - 0))
    let max = min + +this.codeNum
    let newPixel
    for (let i = min; i < max; i++) {
      this.methFourDataService.arrChannelY.forEach((n, index, arr) => {
        if (n == i) {
          arr[index] = 0 //why not
        }
      })
    }
    for (let i = 0; i < this.methFourDataService.arrChannelC.length; i++) {
      newPixel = this.rgbCmykService.cmyk2rgb(this.methFourDataService.arrChannelC[i], this.methFourDataService.arrChannelM[i], this.methFourDataService.arrChannelY[i], this.methFourDataService.arrChannelK[i])
      this.methFourDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
    this.onNext.emit(null)
  }
}
