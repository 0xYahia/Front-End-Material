/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UsersComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';


describe('UsersComponent', () => {
  let fixture: ComponentFixture<UsersComponent>;
  let app: UsersComponent;
  let userService: UserService;
  let dataService: DataService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [UsersComponent]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(UsersComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should user the user name form service', () => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;

    app.isLoggedIn = true;
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;

    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(app.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    const spy: any = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();

    expect(app.data).toBe(undefined);

  });

  it('shouldn\'t fetch data successfully if not called asynchronously', async () => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    const spy: any = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', fakeAsync(() => {
    const fixture: ComponentFixture<UsersComponent> = TestBed.createComponent(UsersComponent);
    const app: UsersComponent = fixture.componentInstance;
    dataService = TestBed.inject(DataService);

    const spy: any = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));
});
