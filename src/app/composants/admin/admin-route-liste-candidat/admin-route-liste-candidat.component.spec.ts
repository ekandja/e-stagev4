import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteListeCandidatComponent } from './admin-route-liste-candidat.component';

describe('AdminRouteListeCandidatComponent', () => {
  let component: AdminRouteListeCandidatComponent;
  let fixture: ComponentFixture<AdminRouteListeCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteListeCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteListeCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
