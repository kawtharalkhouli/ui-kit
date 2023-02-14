import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPanelTestingComponent } from './custom-panel-testing.component';

describe('CustomPanelTestingComponent', () => {
  let component: CustomPanelTestingComponent;
  let fixture: ComponentFixture<CustomPanelTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPanelTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPanelTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
