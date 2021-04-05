import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasComponent } from './menu-bas.component';

describe('MenuBasComponent', () => {
  let component: MenuBasComponent;
  let fixture: ComponentFixture<MenuBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
