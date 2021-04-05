import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDemandeOffreComponent } from './admin-edit-demande-offre.component';

describe('AdminEditDemandeOffreComponent', () => {
  let component: AdminEditDemandeOffreComponent;
  let fixture: ComponentFixture<AdminEditDemandeOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditDemandeOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDemandeOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
