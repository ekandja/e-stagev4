import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeLOffreDemandeComponent } from './detail-de-loffre-demande.component';

describe('DetailDeLOffreDemandeComponent', () => {
  let component: DetailDeLOffreDemandeComponent;
  let fixture: ComponentFixture<DetailDeLOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDeLOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDeLOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
