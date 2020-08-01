import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsalespageComponent } from './sellsalespage.component';

describe('SellsalespageComponent', () => {
  let component: SellsalespageComponent;
  let fixture: ComponentFixture<SellsalespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellsalespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellsalespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
