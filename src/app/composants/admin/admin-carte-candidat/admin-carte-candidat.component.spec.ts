import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarteCandidatComponent } from './admin-carte-candidat.component';

describe('AdminCarteCandidatComponent', () => {
  let component: AdminCarteCandidatComponent;
  let fixture: ComponentFixture<AdminCarteCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarteCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarteCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
