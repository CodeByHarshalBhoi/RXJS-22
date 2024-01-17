import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-map-filtr',
  templateUrl: './map-filtr.component.html',
  styleUrls: ['./map-filtr.component.css']
})
export class MapFiltrComponent  implements OnInit{

  constructor(){}

  array1=[1,2,3,4,5,6,7,8,9,10];
  observable = from(this.array1);

  //MAP OPERATOR
  mapObservable = this.observable.pipe(map((val)=>{
      return val*100;
  }))

//FILTER OPERATOR
  filterObservable = this.mapObservable.pipe(filter((val)=>{
        return val >600
  }))


  //MULTIPLE OPERATOR USE IN SINGLE UNCTION

  mapFilterObj = this.observable.pipe(map((val)=>{
    return val*10;
  }), filter((val)=>{
    return val > 50
  }))

  ngOnInit(){
    this.mapObservable.subscribe({
      next:(val:any)=>{
          console.log('Map method data '+val);
      }
    });

    this.filterObservable.subscribe((res)=>{
      console.log('Filter data '+res);
    });

    this.mapFilterObj.subscribe((res)=>{
      console.log("Map & Filter Data"+res);
    });
  }
}
