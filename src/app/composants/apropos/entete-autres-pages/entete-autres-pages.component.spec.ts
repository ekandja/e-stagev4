import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteAutresPagesComponent } from './entete-autres-pages.component';

describe('EnteteAutresPagesComponent', () => {
  let component: EnteteAutresPagesComponent;
  let fixture: ComponentFixture<EnteteAutresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteAutresPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteAutresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
