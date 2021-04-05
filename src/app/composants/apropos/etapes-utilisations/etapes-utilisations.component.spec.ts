import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapesUtilisationsComponent } from './etapes-utilisations.component';

describe('EtapesUtilisationsComponent', () => {
  let component: EtapesUtilisationsComponent;
  let fixture: ComponentFixture<EtapesUtilisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapesUtilisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapesUtilisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
