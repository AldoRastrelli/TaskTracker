import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { CardComponent } from './card/card.component';
import {TaskComponent} from "./task/task.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTracker';
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
}