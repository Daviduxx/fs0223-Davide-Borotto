import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisactivatedComponent } from './disactivated.component';

describe('DisactivatedComponent', () => {
  let component: DisactivatedComponent;
  let fixture: ComponentFixture<DisactivatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisactivatedComponent]
    });
    fixture = TestBed.createComponent(DisactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
