import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-board-view',
  templateUrl: './edit-board-view.component.html',
  styleUrls: ['./edit-board-view.component.css']
})
export class EditBoardViewComponent implements OnInit {

  constructor() { }

  NewTaskMessage = "+ Add New Task";
  onDefaultView = true;

  isDefaultView() {
    return this.onDefaultView;
  }
  ngOnInit(): void {
  }

  addNewView(){
    this.onDefaultView = false;
  }

  saveTask(){

    this.onDefaultView = true;
  }

  cancelTask(){
    if (confirm("Are you sure? Input data will be lost.")) {
      this.onDefaultView = true;
    }    
  }
}
