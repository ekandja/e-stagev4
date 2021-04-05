import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteDetailStageComponent } from './admin-route-detail-stage.component';

describe('AdminRouteDetailStageComponent', () => {
  let component: AdminRouteDetailStageComponent;
  let fixture: ComponentFixture<AdminRouteDetailStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteDetailStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteDetailStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
