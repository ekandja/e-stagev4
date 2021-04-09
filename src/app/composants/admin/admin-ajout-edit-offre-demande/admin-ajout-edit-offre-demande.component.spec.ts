import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutEditOffreDemandeComponent } from './admin-ajout-edit-offre-demande.component';

describe('AdminAjoutEditOffreDemandeComponent', () => {
  let component: AdminAjoutEditOffreDemandeComponent;
  let fixture: ComponentFixture<AdminAjoutEditOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjoutEditOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjoutEditOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
