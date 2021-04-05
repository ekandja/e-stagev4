import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteursDactiviteComponent } from './secteurs-dactivite.component';

describe('SecteursDactiviteComponent', () => {
  let component: SecteursDactiviteComponent;
  let fixture: ComponentFixture<SecteursDactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteursDactiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteursDactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
