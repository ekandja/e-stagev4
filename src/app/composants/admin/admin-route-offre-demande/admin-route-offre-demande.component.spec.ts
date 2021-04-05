import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteOffreDemandeComponent } from './admin-route-offre-demande.component';

describe('AdminRouteOffreDemandeComponent', () => {
  let component: AdminRouteOffreDemandeComponent;
  let fixture: ComponentFixture<AdminRouteOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
