import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-meth-four-step1',
  templateUrl: './meth-four-step1.component.html',
  styleUrls: ['./meth-four-step1.component.css']
})
export class MethFourStep1Component implements OnInit {

  @ViewChild('m4s1c1') canvas: ElementRef
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  pic = new Image()
  imgDivHeight = 300
  imgDivWidth = 0
  imgUrl = ''
  choosenChannel = ''

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartPlugins = []

  barChartLabels1: Label[] = []
  barChartColor1: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'cyan',
  }]
  barChartData1: ChartDataSets[] = [
    { data: [], label: 'C Channel' }
  ]


  barChartLabels2: Label[] = []
  barChartColor2: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'magenta',
  }]
  barChartData2: ChartDataSets[] = [
    { data: [], label: 'M Channel' }
  ]

  barChartLabels3: Label[] = []
  barChartColor3: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'yellow',
  }]
  barChartData3: ChartDataSets[] = [
    { data: [], label: 'Y Channel' }
  ]

  barChartLabels4: Label[] = []
  barChartColor4: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'black',
  }]
  barChartData4: ChartDataSets[] = [
    { data: [], label: 'K Channel' }
  ]

  constructor(
    private rgbCmykService: RgbCmykService,
    private methFourDataService: MethFourDataService,
    private chartsService: ChartsService,
  ) { }

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
        this.methFourDataService.fullZeroing()
        this.methFourDataService.picParams = {width: this.pic.width, height: this.pic.height}
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

  devideOnChannels(ctx) {
    let pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.chartsService.renderChartsCMYK(4, pixelData.data)
    this.renderCharts(this.methFourDataService.amountChannelC, this.methFourDataService.amountChannelM, this.methFourDataService.amountChannelY, this.methFourDataService.amountChannelK)
  }

  renderCharts(typeC, typeM, typeY, typeK) {
    let chartColumnNames = []
    for (let i = 0; i <= 100; i++) {
      chartColumnNames[i] = i
    }

    this.barChartLabels1 = chartColumnNames
    this.barChartData1 = [
      { data: typeC, label: 'C Channel' }
    ]

    this.barChartLabels2 = chartColumnNames
    this.barChartData2 = [
      { data: typeM, label: 'M Channel' }
    ]

    this.barChartLabels3 = chartColumnNames
    this.barChartData3 = [
      { data: typeY, label: 'Y Channel' }
    ]

    this.barChartLabels4 = chartColumnNames
    this.barChartData4 = [
      { data: typeK, label: 'K Channel' }
    ]
  }

  nextStep() {
    this.onNext.emit(null)
  }
  
}
