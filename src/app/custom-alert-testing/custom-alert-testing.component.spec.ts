import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAlertTestingComponent } from './custom-alert-testing.component';

describe('CustomAlertTestingComponent', () => {
  let component: CustomAlertTestingComponent;
  let fixture: ComponentFixture<CustomAlertTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAlertTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAlertTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
