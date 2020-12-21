import { Component, ComponentFactoryResolver, Inject, Input } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  @Input()
  title:String;
  @Input()
  state:String;
  @Input()
  description:String;
  @Input()
  estimatedTime:Number;
  @Input()
  timeUnit:String;
  

  constructor(@Inject(String) title: string,
              @Inject(String) description:string,
              @Inject(String) state:string,
              @Inject(Number) estimatedTime:number,
              @Inject(String) timeUnit:string) {
    this.title = title;
    this.description = description;
    this.state = state;
    this.estimatedTime = estimatedTime;
    this.timeUnit = timeUnit;
  }
}
