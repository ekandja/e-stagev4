import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteFicheCandidatComponent } from './admin-route-fiche-candidat.component';

describe('AdminRouteFicheCandidatComponent', () => {
  let component: AdminRouteFicheCandidatComponent;
  let fixture: ComponentFixture<AdminRouteFicheCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteFicheCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteFicheCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
