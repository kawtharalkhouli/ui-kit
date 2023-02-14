import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconTestingComponent } from './custom-icon-testing.component';

describe('CustomIconTestingComponent', () => {
  let component: CustomIconTestingComponent;
  let fixture: ComponentFixture<CustomIconTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIconTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
