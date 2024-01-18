import { Component, OnInit } from '@angular/core';
import { interval, take, toArray, of, from } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit{
  counter = interval(1000);


   obj=[
    {name:'Harshal', age:12},
    {name:'Harshal', age:12},
    {name:'Harshal', age:12},
    {name:'Harshal', age:12},
    {name:'Harshal', age:12}
  ]

  ngOnInit(): void {
    this.counter.pipe( take(5),toArray()).subscribe((res)=>{
      console.log(res);
    });


    const array = of('Harshal','Ayush', 'Druvil','Parth')
    array.pipe(toArray()).subscribe(res=>{
      console.log(res);
    });

const users = from(this.obj)
   users.pipe(toArray()).subscribe((res)=>{
    console.log(res);   
   })
  }

}
