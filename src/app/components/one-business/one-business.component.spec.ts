import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBusinessComponent } from './one-business.component';

describe('OneBusinessComponent', () => {
  let component: OneBusinessComponent;
  let fixture: ComponentFixture<OneBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
