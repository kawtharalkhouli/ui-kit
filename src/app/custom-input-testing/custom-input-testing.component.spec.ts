import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputTestingComponent } from './custom-input-testing.component';

describe('CustomInputTestingComponent', () => {
  let component: CustomInputTestingComponent;
  let fixture: ComponentFixture<CustomInputTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
