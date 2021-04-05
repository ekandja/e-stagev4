import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailOffreEtDemandeComponent } from './admin-detail-offre-et-demande.component';

describe('AdminDetailOffreEtDemandeComponent', () => {
  let component: AdminDetailOffreEtDemandeComponent;
  let fixture: ComponentFixture<AdminDetailOffreEtDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailOffreEtDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailOffreEtDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
