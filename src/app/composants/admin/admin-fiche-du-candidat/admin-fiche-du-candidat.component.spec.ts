import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFicheDuCandidatComponent } from './admin-fiche-du-candidat.component';

describe('AdminFicheDuCandidatComponent', () => {
  let component: AdminFicheDuCandidatComponent;
  let fixture: ComponentFixture<AdminFicheDuCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFicheDuCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFicheDuCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
