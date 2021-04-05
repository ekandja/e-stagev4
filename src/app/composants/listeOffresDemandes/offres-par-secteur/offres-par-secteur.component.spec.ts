import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresParSecteurComponent } from './offres-par-secteur.component';

describe('OffresParSecteurComponent', () => {
  let component: OffresParSecteurComponent;
  let fixture: ComponentFixture<OffresParSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresParSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresParSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
