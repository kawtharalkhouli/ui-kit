import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipsTestingComponent } from './custom-chips-testing.component';

describe('CustomChipsTestingComponent', () => {
  let component: CustomChipsTestingComponent;
  let fixture: ComponentFixture<CustomChipsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChipsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChipsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
