import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutDemandeComponent } from './admin-ajout-demande.component';

describe('AdminAjoutDemandeComponent', () => {
  let component: AdminAjoutDemandeComponent;
  let fixture: ComponentFixture<AdminAjoutDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjoutDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjoutDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
