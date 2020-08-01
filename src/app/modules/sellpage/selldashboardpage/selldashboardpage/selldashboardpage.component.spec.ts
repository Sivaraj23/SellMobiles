import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelldashboardpageComponent } from './selldashboardpage.component';
import { ChartsModule } from "ng2-charts";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelldashboardpageComponent', () => {
  let component: SelldashboardpageComponent;
  let fixture: ComponentFixture<SelldashboardpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
        SelldashboardpageComponent
      ],
      imports :[
        NgMaterialModule,
        ChartsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelldashboardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click the chart', () => {
    expect(component.chartClicked).toBeCloseTo;
  });

  it('should hover the chart', () => {
    expect(component.chartClicked).toBeTruthy;
  });
});
