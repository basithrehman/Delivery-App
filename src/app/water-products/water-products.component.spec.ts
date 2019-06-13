import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterProductsComponent } from './water-products.component';

describe('WaterProductsComponent', () => {
  let component: WaterProductsComponent;
  let fixture: ComponentFixture<WaterProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
