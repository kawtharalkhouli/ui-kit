import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabsTestingComponent } from './custom-tabs-testing.component';

describe('CustomTabsTestingComponent', () => {
  let component: CustomTabsTestingComponent;
  let fixture: ComponentFixture<CustomTabsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTabsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
