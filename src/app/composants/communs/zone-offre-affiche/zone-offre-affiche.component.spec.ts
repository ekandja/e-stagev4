import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOffreAfficheComponent } from './zone-offre-affiche.component';

describe('ZoneOffreAfficheComponent', () => {
  let component: ZoneOffreAfficheComponent;
  let fixture: ComponentFixture<ZoneOffreAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneOffreAfficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneOffreAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
