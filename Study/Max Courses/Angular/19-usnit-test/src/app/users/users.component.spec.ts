/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';


describe('UsersComponent', () => {
  let fixture: ComponentFixture<UsersComponent>;
  let app: UsersComponent;

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
});
