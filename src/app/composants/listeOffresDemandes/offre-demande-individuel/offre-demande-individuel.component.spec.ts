import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDemandeIndividuelComponent } from './offre-demande-individuel.component';

describe('OffreDemandeIndividuelComponent', () => {
  let component: OffreDemandeIndividuelComponent;
  let fixture: ComponentFixture<OffreDemandeIndividuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDemandeIndividuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDemandeIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
