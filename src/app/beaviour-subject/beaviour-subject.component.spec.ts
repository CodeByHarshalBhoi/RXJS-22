import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaviourSubjectComponent } from './beaviour-subject.component';

describe('BeaviourSubjectComponent', () => {
  let component: BeaviourSubjectComponent;
  let fixture: ComponentFixture<BeaviourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaviourSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
