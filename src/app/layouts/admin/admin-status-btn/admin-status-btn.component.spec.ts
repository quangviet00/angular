import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusBtnComponent } from './admin-status-btn.component';

describe('AdminStatusBtnComponent', () => {
  let component: AdminStatusBtnComponent;
  let fixture: ComponentFixture<AdminStatusBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatusBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
