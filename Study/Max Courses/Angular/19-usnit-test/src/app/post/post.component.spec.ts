import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(PostComponent);
    const app: any = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
