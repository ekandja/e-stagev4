import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercheursStageComponent } from './chercheurs-stage.component';

describe('ChercheursStageComponent', () => {
  let component: ChercheursStageComponent;
  let fixture: ComponentFixture<ChercheursStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercheursStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercheursStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
