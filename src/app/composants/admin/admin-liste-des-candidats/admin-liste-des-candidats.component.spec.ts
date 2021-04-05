import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeDesCandidatsComponent } from './admin-liste-des-candidats.component';

describe('AdminListeDesCandidatsComponent', () => {
  let component: AdminListeDesCandidatsComponent;
  let fixture: ComponentFixture<AdminListeDesCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeDesCandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeDesCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
