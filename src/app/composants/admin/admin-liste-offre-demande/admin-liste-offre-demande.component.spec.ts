import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeOffreDemandeComponent } from './admin-liste-offre-demande.component';

describe('AdminListeOffreDemandeComponent', () => {
  let component: AdminListeOffreDemandeComponent;
  let fixture: ComponentFixture<AdminListeOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
