import { Component, ComponentFactoryResolver,ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { EditBoardViewComponent } from '../edit-board-view/edit-board-view.component';

@Component({
  selector: 'edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements AfterViewInit {

  @ViewChild('editBoardContent', { read: ViewContainerRef }) editBoardContent: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
  }

  ngAfterViewInit() {
    const content = this.componentFactoryResolver.resolveComponentFactory(EditBoardViewComponent);
    this.editBoardContent.clear();

    <EditBoardViewComponent>this.editBoardContent.createComponent(content).instance;
  }

}
