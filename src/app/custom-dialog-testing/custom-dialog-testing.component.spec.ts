import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogTestingComponent } from './custom-dialog-testing.component';

describe('CustomDialogTestingComponent', () => {
  let component: CustomDialogTestingComponent;
  let fixture: ComponentFixture<CustomDialogTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDialogTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialogTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
