import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit{

  data:number[]=[];

  unsubscribeObj = interval(1000);
  subscriber1;

  ngOnInit(): void {

  }
onSubscribe(){
  this.subscriber1=this.unsubscribeObj.subscribe(res=>{
    console.log(res);
    this.data.push(res);
  })
}

onUnSubscribe(){
  this.subscriber1.unsubscribe();
}
}
