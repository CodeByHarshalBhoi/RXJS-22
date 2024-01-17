import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {

//ONSRVABLE NOT RETURN SAME VALUE FOR ALL SUBSCRIBER
    // let obs = new Observable((observer)=>{
    //     observer.next(Math.random()*100)
    // })
    // obs.subscribe((res)=>{
    //   console.log(res);
    // });

    // obs .subscribe((res)=>{
    //   console.log(res);
    // })


    //SUBJECT AWAYS RETURN SAM VALUE FOR ALL SUBSCRIBER
    let sub = new Subject()
    sub.subscribe((res)=>{
      console.log(res);
    });

    sub .subscribe((res)=>{
      console.log(res);
    })
    sub.next(Math.random())
  }

}
