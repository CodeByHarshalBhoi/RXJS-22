import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-interval-time',
  templateUrl: './interval-time.component.html',
  styleUrls: ['./interval-time.component.css']
})
export class IntervalTimeComponent implements OnInit{

  constructor(private dataService:DataService){

  }
    dataInterval = interval(1000);
    dataTimer = timer(5000, 1000);
    dataSubscription : Subscription;
    // addData:number[]=[];
    ngOnInit(): void {


      //TIMER DATA
      this.dataSubscription=this.dataTimer.subscribe((res)=>{
        console.log(res);
        this.dataService.printData(res, 'dataList');
        if(res>=10){
          this.dataSubscription.unsubscribe();
        }
      })

      //INTERVAL DATA
      this.dataSubscription=this.dataInterval.subscribe((res)=>{
        console.log(res);
        this.dataService.printData(res, 'dataList1');
        if(res>=10){
          this.dataSubscription.unsubscribe();
        }
      })
    }
}
