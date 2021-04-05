import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteOffreDemandeComponent } from './carte-offre-demande.component';

describe('CarteOffreDemandeComponent', () => {
  let component: CarteOffreDemandeComponent;
  let fixture: ComponentFixture<CarteOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
