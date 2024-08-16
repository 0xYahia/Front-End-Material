import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'TapTag' title`, () => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app.title).toEqual('TapTag');
  });

  // it('should render title', () => {
  //   const fixture: ComponentFixture<any> = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, TapTag');
  // });
});
