import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarTestingComponent } from './progress-bar-testing.component';

describe('ProgressBarTestingComponent', () => {
  let component: ProgressBarTestingComponent;
  let fixture: ComponentFixture<ProgressBarTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
