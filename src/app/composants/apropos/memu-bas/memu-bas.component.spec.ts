import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemuBasComponent } from './memu-bas.component';

describe('MemuBasComponent', () => {
  let component: MemuBasComponent;
  let fixture: ComponentFixture<MemuBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemuBasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemuBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
