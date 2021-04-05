import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteAccueilComponent } from './entete-accueil.component';

describe('EnteteAccueilComponent', () => {
  let component: EnteteAccueilComponent;
  let fixture: ComponentFixture<EnteteAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
