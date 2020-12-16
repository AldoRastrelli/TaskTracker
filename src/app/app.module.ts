import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoardComponent } from './board/board.component';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './card/card.component';
import { EditBoardViewComponent } from './edit-board-view/edit-board-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BoardComponent,
    EditBoardComponent,
    ListComponent,
    TaskComponent,
    CardComponent,
    EditBoardViewComponent
  ],
  entryComponents: [TaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
