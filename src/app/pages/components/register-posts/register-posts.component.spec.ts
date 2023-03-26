import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPostsComponent } from './register-posts.component';

describe('RegisterPostsComponent', () => {
  let component: RegisterPostsComponent;
  let fixture: ComponentFixture<RegisterPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
