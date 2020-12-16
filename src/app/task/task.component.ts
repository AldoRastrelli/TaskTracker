import { Component, ComponentFactoryResolver, Input } from '@angular/core';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
  }
}
