import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutOffreComponent } from './admin-ajout-offre.component';

describe('AdminAjoutOffreComponent', () => {
  let component: AdminAjoutOffreComponent;
  let fixture: ComponentFixture<AdminAjoutOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjoutOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjoutOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
