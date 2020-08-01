import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from "src/app/core/header/header.component";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { LoaderComponent } from "src/app/shared/components/loader/loader.component";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AuthService, AuthServiceConfig } from "angular5-social-login";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,NgMaterialModule, ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',
        }),HttpClientModule
      ],
      declarations: [
        AppComponent,HeaderComponent,LoaderComponent
      ],providers:[AuthService,AuthServiceConfig]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-sell-mobiles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-sell-mobiles');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-sell-mobiles!');
  });
});
