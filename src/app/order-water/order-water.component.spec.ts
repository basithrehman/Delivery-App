import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWaterComponent } from './order-water.component';

describe('OrderWaterComponent', () => {
  let component: OrderWaterComponent;
  let fixture: ComponentFixture<OrderWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
