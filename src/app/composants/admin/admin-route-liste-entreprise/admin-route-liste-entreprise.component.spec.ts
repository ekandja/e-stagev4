import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteListeEntrepriseComponent } from './admin-route-liste-entreprise.component';

describe('AdminRouteListeEntrepriseComponent', () => {
  let component: AdminRouteListeEntrepriseComponent;
  let fixture: ComponentFixture<AdminRouteListeEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteListeEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteListeEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
