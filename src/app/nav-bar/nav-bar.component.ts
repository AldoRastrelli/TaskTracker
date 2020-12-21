import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title= 'Project Name';

  constructor() { }

  titleIsSet = true;

  ngOnInit(): void {
    this.titleIsSet = true;
  }

  changeTitle(){
    this.titleIsSet = false;
  }

  setTitle(title:string){
    this.title = title;
    console.log("new title", this.title);
    this.titleIsSet = true;
  }

  // values = '';
  // onKey(newTitle: string) {
  //   console.log(newTitle," is the new Title of the project");
  //   this.title = newTitle;
  //   this.titleIsSet = false;
  // }
}
