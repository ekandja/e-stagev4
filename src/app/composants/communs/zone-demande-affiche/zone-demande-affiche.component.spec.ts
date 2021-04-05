import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDemandeAfficheComponent } from './zone-demande-affiche.component';

describe('ZoneDemandeAfficheComponent', () => {
  let component: ZoneDemandeAfficheComponent;
  let fixture: ComponentFixture<ZoneDemandeAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDemandeAfficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDemandeAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
