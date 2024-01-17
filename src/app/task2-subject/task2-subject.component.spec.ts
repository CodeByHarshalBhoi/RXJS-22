import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2SubjectComponent } from './task2-subject.component';

describe('Task2SubjectComponent', () => {
  let component: Task2SubjectComponent;
  let fixture: ComponentFixture<Task2SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2SubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
