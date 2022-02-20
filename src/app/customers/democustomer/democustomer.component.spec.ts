import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocustomerComponent } from './democustomer.component';

describe('DemocustomerComponent', () => {
  let component: DemocustomerComponent;
  let fixture: ComponentFixture<DemocustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
