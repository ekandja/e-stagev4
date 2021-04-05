import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeAttenteComponent } from './admin-liste-attente.component';

describe('AdminListeAttenteComponent', () => {
  let component: AdminListeAttenteComponent;
  let fixture: ComponentFixture<AdminListeAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
