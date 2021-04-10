import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../../app-routing.module';
import { ActivatedRoute } from '@angular/router';

import { AdminEnteteComponent } from './admin-entete.component';

describe('AdminEnteteComponent', () => {
  let component: AdminEnteteComponent;
  let fixture: ComponentFixture<AdminEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, ActivatedRoute],
      declarations: [ AdminEnteteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
