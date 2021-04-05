import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnteteComponent } from './admin-entete.component';

describe('AdminEnteteComponent', () => {
  let component: AdminEnteteComponent;
  let fixture: ComponentFixture<AdminEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnteteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
