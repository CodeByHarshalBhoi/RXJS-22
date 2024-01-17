import { Component, OnInit, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task2-subject',
  templateUrl: './task2-subject.component.html',
  styleUrls: ['./task2-subject.component.css']
})
export class Task2SubjectComponent implements OnInit{
// taskservice:TaskServiceService=inject(TaskServiceService);
constructor(private taskService:TaskServiceService){}

  tasks:string[]=['task-1', 'task-2', 'task-3', 'task-4'];

  ngOnInit(){
    this.taskService.CreateTask.subscribe((res)=>{
      console.log("asdfghjk",res);

      this.tasks.push(res);
    })
  }
}
