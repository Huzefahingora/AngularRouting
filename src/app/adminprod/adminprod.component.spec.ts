import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprodComponent } from './adminprod.component';

describe('AdminprodComponent', () => {
  let component: AdminprodComponent;
  let fixture: ComponentFixture<AdminprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
