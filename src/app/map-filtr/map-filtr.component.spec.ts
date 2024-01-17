import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFiltrComponent } from './map-filtr.component';

describe('MapFiltrComponent', () => {
  let component: MapFiltrComponent;
  let fixture: ComponentFixture<MapFiltrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapFiltrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapFiltrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
