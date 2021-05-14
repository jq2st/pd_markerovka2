import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MethOneDataService } from 'src/app/services/meth-one-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartsService } from 'src/app/services/charts.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meth-one-step3',
  templateUrl: './meth-one-step3.component.html',
  styleUrls: ['./meth-one-step3.component.css']
})
export class MethOneStep3Component implements OnInit {

  @ViewChild('m1s3c1', {static: true}) canvas: ElementRef
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


  constructor(private api: ApiService, private methOneDataService: MethOneDataService, private chartsService: ChartsService) { }

  ngOnInit() {
    this.canvas.nativeElement.width = this.methOneDataService.picParams.width;
    this.canvas.nativeElement.height = this.methOneDataService.picParams.height;
    const ctx = this.canvas.nativeElement.getContext('2d');
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.methOneDataService.newImageArray[i + 0]
      imageData.data[i + 1] = this.methOneDataService.newImageArray[i + 1]
      imageData.data[i + 2] = this.methOneDataService.newImageArray[i + 2]
      imageData.data[i + 3] = this.methOneDataService.newImageArray[i + 3]
    }
    ctx.putImageData(imageData, 0, 0)
    this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
    this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height)

    const size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height
    const img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm1result.png');
    this.api.addToDb('1', img, size)
      .subscribe(res => {
        console.log(res)
      })

    this.chartsService.renderChartsRGB(1, imageData.data)
    this.renderCharts(this.methOneDataService.amountChannelR, this.methOneDataService.amountChannelG, this.methOneDataService.amountChannelB)
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
