import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit{

  asyncVideoEmit = new AsyncSubject();
  asyncVideoEmitVar;

  ngOnInit(): void {
      this.asyncVideoEmit.subscribe((res)=>{
        this.asyncVideoEmitVar=res;



        // const asyncSub = new AsyncSubject();
        // asyncSub.next(500);
        // asyncSub.next(400);
        // asyncSub.next(300);
        // asyncSub.complete();
        // asyncSub.subscribe((res)=>{
        //   console.log(res);
        // })

      })
  }

  onVideoAdd(video){
  console.log(video);
  this.asyncVideoEmit.next(video);
  }

  onComplete(){
      this.asyncVideoEmit.complete()
  }

  }
