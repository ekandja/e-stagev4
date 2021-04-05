import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteCandidatEntpriseComponent } from './admin-route-candidat-entprise.component';

describe('AdminRouteCandidatEntpriseComponent', () => {
  let component: AdminRouteCandidatEntpriseComponent;
  let fixture: ComponentFixture<AdminRouteCandidatEntpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteCandidatEntpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteCandidatEntpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
