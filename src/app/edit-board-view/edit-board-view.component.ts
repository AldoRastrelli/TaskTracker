import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { CardComponent } from '../card/card.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'edit-board-view',
  templateUrl: './edit-board-view.component.html',
  styleUrls: ['./edit-board-view.component.css']
})
export class EditBoardViewComponent implements OnInit {

  constructor() { }

  NewTaskMessage = "+ Add New Task";
  onDefaultView;

  isDefaultView() {
    return this.onDefaultView;
  }
  ngOnInit(): void {
    this.onDefaultView = true;
  }

  addNewView(){
    this.onDefaultView = false;
  }

  saveTask(title:string, description:string, state:string, estimatedTime:number, timeUnit:string){
    const task = new TaskComponent(title, state, description, estimatedTime, timeUnit);
    console.log("New task:", task.title)
    const card = new CardComponent(task);
    this.onDefaultView = true;
  }

  cancelTask(){
    if (confirm("Are you sure? Input data will be lost.")) {
      this.onDefaultView = true;
    }    
  }

}
