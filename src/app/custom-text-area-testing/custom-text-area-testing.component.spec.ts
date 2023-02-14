import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextAreaTestingComponent } from './custom-text-area-testing.component';

describe('CustomTextAreaTestingComponent', () => {
  let component: CustomTextAreaTestingComponent;
  let fixture: ComponentFixture<CustomTextAreaTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTextAreaTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTextAreaTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
