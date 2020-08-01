import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellproductpageComponent } from './sellproductpage.component';

describe('SellproductpageComponent', () => {
  let component: SellproductpageComponent;
  let fixture: ComponentFixture<SellproductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellproductpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
