import { Component, Inject, Input, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input()
  task:TaskComponent;
  title: String;
  state: String;
  estimatedTime:String;

  constructor(@Inject(TaskComponent) task:TaskComponent) {
    this.task = task;
    this.title = task.title;
    this.state = task.state;
    this.estimatedTime = task.estimatedTime.toString() + " " + task.timeUnit;
    console.log("card ", this.title, this.estimatedTime);
  }

  ngOnInit(): void {
  }

}
