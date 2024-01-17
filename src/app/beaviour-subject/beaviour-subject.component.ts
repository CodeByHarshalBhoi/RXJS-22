import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-beaviour-subject',
  templateUrl: './beaviour-subject.component.html',
  styleUrls: ['./beaviour-subject.component.css']
})
export class BeaviourSubjectComponent implements OnInit{

  constructor(){


  }
  ngOnInit(): void {
    let subject = new BehaviorSubject(100);
    subject.subscribe((res)=>{
      console.log("Subscriber 1: "+res);
    });

    subject.subscribe((res)=>{
      console.log("Subscriber 2: "+res);
    })

    subject.next(200);

    subject.subscribe((res)=>{
      console.log("Subscriber 3: "+res);
    })

    subject.next(2001);
  }
}
