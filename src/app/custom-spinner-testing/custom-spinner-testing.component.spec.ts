import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpinnerTestingComponent } from './custom-spinner-testing.component';

describe('CustomSpinnerTestingComponent', () => {
  let component: CustomSpinnerTestingComponent;
  let fixture: ComponentFixture<CustomSpinnerTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSpinnerTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpinnerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
