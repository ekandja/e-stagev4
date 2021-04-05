import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeLOffreDemandeComponent } from './page-de-loffre-demande.component';

describe('PageDeLOffreDemandeComponent', () => {
  let component: PageDeLOffreDemandeComponent;
  let fixture: ComponentFixture<PageDeLOffreDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeLOffreDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeLOffreDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
