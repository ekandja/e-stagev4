import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttenteValidationComponent } from './admin-attente-validation.component';

describe('AdminAttenteValidationComponent', () => {
  let component: AdminAttenteValidationComponent;
  let fixture: ComponentFixture<AdminAttenteValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAttenteValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttenteValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
