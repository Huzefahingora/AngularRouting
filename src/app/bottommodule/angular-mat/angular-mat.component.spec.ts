import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatComponent } from './angular-mat.component';

describe('AngularMatComponent', () => {
  let component: AngularMatComponent;
  let fixture: ComponentFixture<AngularMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
