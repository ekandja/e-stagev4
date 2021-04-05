import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeCandidatEntrepriseComponent } from './admin-liste-candidat-entreprise.component';

describe('AdminListeCandidatEntrepriseComponent', () => {
  let component: AdminListeCandidatEntrepriseComponent;
  let fixture: ComponentFixture<AdminListeCandidatEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeCandidatEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeCandidatEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
