import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBottlesPageComponent } from './premium-bottles-page.component';

describe('PremiumBottlesPageComponent', () => {
  let component: PremiumBottlesPageComponent;
  let fixture: ComponentFixture<PremiumBottlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumBottlesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumBottlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
