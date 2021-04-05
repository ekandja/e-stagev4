import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteAttenteComponent } from './admin-route-attente.component';

describe('AdminRouteAttenteComponent', () => {
  let component: AdminRouteAttenteComponent;
  let fixture: ComponentFixture<AdminRouteAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
