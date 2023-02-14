import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonTestingComponent } from './custom-button-testing.component';

describe('CustomButtonTestingComponent', () => {
  let component: CustomButtonTestingComponent;
  let fixture: ComponentFixture<CustomButtonTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomButtonTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
