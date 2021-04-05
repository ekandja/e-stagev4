import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiDemanderComponent } from './pourquoi-demander.component';

describe('PourquoiDemanderComponent', () => {
  let component: PourquoiDemanderComponent;
  let fixture: ComponentFixture<PourquoiDemanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourquoiDemanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiDemanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
