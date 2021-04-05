import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiOffrirComponent } from './pourquoi-offrir.component';

describe('PourquoiOffrirComponent', () => {
  let component: PourquoiOffrirComponent;
  let fixture: ComponentFixture<PourquoiOffrirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourquoiOffrirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiOffrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
