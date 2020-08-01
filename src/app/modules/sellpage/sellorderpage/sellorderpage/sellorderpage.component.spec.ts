import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellorderpageComponent } from './sellorderpage.component';

describe('SellorderpageComponent', () => {
  let component: SellorderpageComponent;
  let fixture: ComponentFixture<SellorderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellorderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
