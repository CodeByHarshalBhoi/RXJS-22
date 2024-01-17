import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs';

  @ViewChild('createbtn') createbtn: ElementRef
  createBtnObservable;

  array1 = [1, 2, 3, 4, 5, 6];
  array2 = ["har", "a", "c"]

  constructor() {

  }


  //of operator
  // observable=of(this.array1, this.array2)

  //   ngOnInit(): void {
  //     this.observable.subscribe(res=>{
  //       console.log(res);
  //     })
  //   }


  //from operator
  promiseData = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 100])
  });
  fromObjsrvabl = from(this.promiseData);
  ngOnInit(): void {
    this.fromObjsrvabl.subscribe(res => {
      console.log(res);
    })
  }


  buttonClick() {
    let count = 0;
    this.createBtnObservable = fromEvent(this.createbtn?.nativeElement, 'click').subscribe((res) => {
      console.log(res);
      this.showItem(++count)
    })
  }

  ngAfterViewInit() {
    this.buttonClick();
  }


  showItem(val) {

    let div = document.createElement('div');
    div.innerText = 'video' + val;
    document.getElementById('container').appendChild(div);
  }
}


