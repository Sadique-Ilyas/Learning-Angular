import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExampleComponent } from './ng-if-example.component';

describe('NgIfExampleComponent', () => {
  let component: NgIfExampleComponent;
  let fixture: ComponentFixture<NgIfExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfExampleComponent]
    });
    fixture = TestBed.createComponent(NgIfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
