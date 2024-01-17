import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1SubjectComponent } from './task1-subject.component';

describe('Task1SubjectComponent', () => {
  let component: Task1SubjectComponent;
  let fixture: ComponentFixture<Task1SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1SubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
