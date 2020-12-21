import { Component, Input, OnInit } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  title;
  
  ngOnInit(): void {
  }

}
