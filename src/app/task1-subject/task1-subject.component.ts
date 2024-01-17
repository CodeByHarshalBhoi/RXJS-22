import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task1-subject',
  templateUrl: './task1-subject.component.html',
  styleUrls: ['./task1-subject.component.css']
})
export class Task1SubjectComponent {


constructor(private taskService:TaskServiceService){}

newTask:string='';
// taskService:TaskServiceService =inject(TaskServiceService);?
crateTask(){
  console.log(this.newTask);
  this.taskService.OnCrateTask(this.newTask);
}
}
