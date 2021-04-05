import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesOffresDemandesComponent } from './toutes-offres-demandes.component';

describe('ToutesOffresDemandesComponent', () => {
  let component: ToutesOffresDemandesComponent;
  let fixture: ComponentFixture<ToutesOffresDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutesOffresDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutesOffresDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
