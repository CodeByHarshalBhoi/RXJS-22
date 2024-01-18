import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit{


  constructor(private dataService:DataService){}

  @ViewChild('getDataBtn') getDataBtn:ElementRef;

  ngAfterViewInit(): void {
    let count=0;
      fromEvent(this.getDataBtn.nativeElement, 'click').subscribe((res)=>{
        console.log(res);
        this.dataService.printData(++count, 'dataList2')
        this.dataService.printData(++count, 'dataList')
      })
  }

}
