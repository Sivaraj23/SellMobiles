import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandComponent } from './brand.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";

describe('BrandComponent', () => {
  let component: BrandComponent;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandComponent ]
      ,imports:[NgMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
