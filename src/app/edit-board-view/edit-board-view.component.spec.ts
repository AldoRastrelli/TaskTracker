import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardViewComponent } from './edit-board-view.component';

describe('EditBoardViewComponent', () => {
  let component: EditBoardViewComponent;
  let fixture: ComponentFixture<EditBoardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBoardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
