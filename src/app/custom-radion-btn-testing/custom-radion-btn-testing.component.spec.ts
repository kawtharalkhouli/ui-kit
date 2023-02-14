import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadionBtnTestingComponent } from './custom-radion-btn-testing.component';

describe('CustomRadionBtnTestingComponent', () => {
  let component: CustomRadionBtnTestingComponent;
  let fixture: ComponentFixture<CustomRadionBtnTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRadionBtnTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadionBtnTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
