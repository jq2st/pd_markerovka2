import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { MethTwoDataService } from 'src/app/services/meth-two-data.service';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-meth-two-step1',
  templateUrl: './meth-two-step1.component.html',
  styleUrls: ['./meth-two-step1.component.css']
})
export class MethTwoStep1Component {

  @ViewChild('m2s1c1') canvas: ElementRef
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
    backgroundColor: 'red',
  }]
  barChartData1: ChartDataSets[] = [
    { data: [], label: 'R Channel' }
  ]


  barChartLabels2: Label[] = []
  barChartColor2: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'green',
  }]
  barChartData2: ChartDataSets[] = [
    { data: [], label: 'G Channel' }
  ]

  barChartLabels3: Label[] = []
  barChartColor3: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'blue',
  }]
  barChartData3: ChartDataSets[] = [
    { data: [], label: 'B Channel' }
  ]


  constructor(private methTwoDataService: MethTwoDataService, private chartsService: ChartsService) { }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
	  this.reader.onload = () => {
      let ctx = this.canvas.nativeElement.getContext('2d')
      this.pic.onload = () => {
        this.choosenChannel = ''
        this.methTwoDataService.fullZeroing()
        this.methTwoDataService.picParams = {width: this.pic.width, height: this.pic.height}
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
    var pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.chartsService.renderChartsRGB(2, pixelData.data)
    this.renderCharts(this.methTwoDataService.amountChannelR, this.methTwoDataService.amountChannelG, this.methTwoDataService.amountChannelB)
  }

  renderCharts(typeR, typeG, typeB) {
    let chartColumnNames = []
    for (let i = 0; i <= 255; i++) {
      chartColumnNames[i] = i
    }

    this.barChartLabels1 = chartColumnNames
    this.barChartData1 = [
      { data: typeR, label: 'R Channel' }
    ]

    this.barChartLabels2 = chartColumnNames
    this.barChartData2 = [
      { data: typeG, label: 'G Channel' }
    ]

    this.barChartLabels3 = chartColumnNames
    this.barChartData3 = [
      { data: typeB, label: 'B Channel' }
    ]
  }

  chooseChannel(channel) {
    this.isChoosen = true
    this.choosenChannel = channel
    this.methTwoDataService.choosenChannel = channel
  }

  nextStep() {
    this.onNext.emit(null)
  }
  
}
