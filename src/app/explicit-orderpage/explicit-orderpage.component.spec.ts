import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicitOrderpageComponent } from './explicit-orderpage.component';

describe('ExplicitOrderpageComponent', () => {
  let component: ExplicitOrderpageComponent;
  let fixture: ComponentFixture<ExplicitOrderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicitOrderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicitOrderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
