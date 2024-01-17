import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  printData(val, containerID){
    let el = document.createElement('li');
    el.innerText = 'Video' + val;
    el.className='list-group-item';
    document.getElementById(containerID).appendChild(el)
  }
}
