import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifOffreDemandeComponent } from './admin-modif-offre-demande.component';

describe('AdminModifOffreDemandeComponent', () => {
  let component: AdminModifOffreDemandeComponent;
  let fixture: ComponentFixture<AdminModifOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
