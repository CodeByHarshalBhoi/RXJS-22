import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription, count, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit{

user1_List=[
  'Angular 1',
  'Angular 2'
];
user2_Lit=[

];
user3_List=[
]


videoEmit = new ReplaySubject<string>(5)

subscription2:Subscription
subscription3:Subscription


subscribeMode2:boolean = false;
subscribeMode3:boolean = false;


methodInterval : boolean = false;
intervalSubscription : Subscription;

user2Subscribe(){
  if(this.subscribeMode2){
    this.subscription2.unsubscribe();
  }else{
    this.subscription2=this.videoEmit.subscribe((res)=>{
      this.user2_Lit.push(res);
    })
  }

  this.subscribeMode2 = ! this.subscribeMode2
}
user3Subscribe(){
  if(this.subscribeMode3){
    this.subscription3.unsubscribe();
  }else{
    this.subscription3 = this.videoEmit.subscribe((res)=>{
      this.user3_List.push(res);
    })
  }
this.subscribeMode3 = ! this.subscribeMode3
}

ngOnInit(): void {
 this.videoEmit.subscribe((res)=>{
  console.log(res);
this.user1_List.push(res);
 })
}

onVideoAdd(video){
console.log(video);
this.videoEmit.next(video);
}

toggleMethod(){
  const broadCastVideo = interval(1000);
  if(!this.intervalSubscription){
    this.intervalSubscription=broadCastVideo.subscribe(res=>{
    this.videoEmit.next('video'+ res)
  })
}else{
  this.intervalSubscription.unsubscribe();
}
this.methodInterval = ! this.methodInterval;
}
}
