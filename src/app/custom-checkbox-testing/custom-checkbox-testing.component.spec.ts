import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxTestingComponent } from './custom-checkbox-testing.component';

describe('CustomCheckboxTestingComponent', () => {
  let component: CustomCheckboxTestingComponent;
  let fixture: ComponentFixture<CustomCheckboxTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCheckboxTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckboxTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
