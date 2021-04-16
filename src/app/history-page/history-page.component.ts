import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  labels = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getHistory()
      .subscribe((res: any[]) => {
        console.log(res)
        this.labels = res
      })
  }

}
