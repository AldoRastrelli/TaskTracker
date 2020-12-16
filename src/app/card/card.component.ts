import { Component, Input, OnInit } from '@angular/core';
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
  estimatedTime:String;

  constructor(task:TaskComponent) {
    this.task = task;
    this.title = task.title;
    this.estimatedTime = task.estimatedTime.toString() + " " + task.timeUnit;
  }

  ngOnInit(): void {
  }

}
