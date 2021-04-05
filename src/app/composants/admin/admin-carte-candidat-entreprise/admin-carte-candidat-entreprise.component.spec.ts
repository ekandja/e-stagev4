import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarteCandidatEntrepriseComponent } from './admin-carte-candidat-entreprise.component';

describe('AdminCarteCandidatEntrepriseComponent', () => {
  let component: AdminCarteCandidatEntrepriseComponent;
  let fixture: ComponentFixture<AdminCarteCandidatEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarteCandidatEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarteCandidatEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
