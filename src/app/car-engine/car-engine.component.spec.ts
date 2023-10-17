import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEngineComponent } from './car-engine.component';

describe('CarEngineComponent', () => {
  let component: CarEngineComponent;
  let fixture: ComponentFixture<CarEngineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarEngineComponent]
    });
    fixture = TestBed.createComponent(CarEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
