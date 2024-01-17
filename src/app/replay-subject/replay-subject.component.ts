import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit{


videoEmit = new ReplaySubject<string>(5)

user1_List=[
  'Angular 1',
  'Angular 2'
];
user2_Lit=[

];
user3_List=[
]

subscription2:Subscription
subscription3:Subscription


subscribeMode2:boolean = false;
subscribeMode3:boolean = false;


user2Subscribe(){
  if(this.subscribeMode2){
    this.subscribeMode2.unsubscribe();
  }else{
    this.subscription2=this.videoEmit.subscribe((res)=>{
      this.user2_Lit.push(res);
    })
  }

  this.subscribeMode2 = ! this.subscribeMode2
}
user3Subscribe(){
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
}
