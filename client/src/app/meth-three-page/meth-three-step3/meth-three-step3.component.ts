import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';

@Component({
  selector: 'app-meth-three-step3',
  templateUrl: './meth-three-step3.component.html',
  styleUrls: ['./meth-three-step3.component.css']
})
export class MethThreeStep3Component implements OnInit {
  
  @ViewChild('m3s3c1', {static: true}) canvas: ElementRef
  @Output() onLast: EventEmitter<any> = new EventEmitter()

  imgUrl
  imgDivHeight = 600
  imgDivWidth = 0

  constructor(private api: ApiService, private methThreeDataService: MethThreeDataService) { }

  ngOnInit() {
    this.canvas.nativeElement.width = this.methThreeDataService.picParams.width;
    this.canvas.nativeElement.height = this.methThreeDataService.picParams.height;
    const ctx = this.canvas.nativeElement.getContext('2d');
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.methThreeDataService.newImageArray[i + 0]
      imageData.data[i + 1] = this.methThreeDataService.newImageArray[i + 1]
      imageData.data[i + 2] = this.methThreeDataService.newImageArray[i + 2]
      imageData.data[i + 3] = this.methThreeDataService.newImageArray[i + 3]
    }
    ctx.putImageData(imageData, 0, 0)
    this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
    this.imgDivWidth = this.canvas.nativeElement.width * (this.imgDivHeight / this.canvas.nativeElement.height)
    
    const size = this.canvas.nativeElement.width + 'x' + this.canvas.nativeElement.height
    const img = new File([this.api.dataURItoBlob(this.imgUrl)], 'm3result.png');
    this.api.addToDb('3', img, size)
      .subscribe(res => {
        console.log(res)
      })
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
