import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOffreDemandeAttenteComponent } from './admin-offre-demande-attente.component';

describe('AdminOffreDemandeAttenteComponent', () => {
  let component: AdminOffreDemandeAttenteComponent;
  let fixture: ComponentFixture<AdminOffreDemandeAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOffreDemandeAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOffreDemandeAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
