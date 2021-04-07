import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-meth-four-step3',
  templateUrl: './meth-four-step3.component.html',
  styleUrls: ['./meth-four-step3.component.css']
})
export class MethFourStep3Component implements OnInit {

  @ViewChild('m4s3c1', {static: true}) canvas: ElementRef
  @Output() onLast: EventEmitter<any> = new EventEmitter()

  imgUrl
  imgDivHeight = 600
  imgDivWidth = 0

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

  constructor(private methFourDataService: MethFourDataService, private chartsService: ChartsService) { }

  ngOnInit() {
    this.canvas.nativeElement.width = this.methFourDataService.picParams.width;
    this.canvas.nativeElement.height = this.methFourDataService.picParams.height;
    const ctx = this.canvas.nativeElement.getContext('2d');
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.methFourDataService.newImageArray[i + 0]
      imageData.data[i + 1] = this.methFourDataService.newImageArray[i + 1]
      imageData.data[i + 2] = this.methFourDataService.newImageArray[i + 2]
      imageData.data[i + 3] = this.methFourDataService.newImageArray[i + 3]
    }
    ctx.putImageData(imageData, 0, 0)
    this.chartsService.renderChartsCMYK(4, imageData.data)
    this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
    this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height)
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
  
  lastStep() {
    this.onLast.emit(null)
  }

  saveImage() {
    const link = document.createElement('a')
    link.download = 'filename.png'
    link.href = this.canvas.nativeElement.toDataURL()
    link.click()
  }
}
