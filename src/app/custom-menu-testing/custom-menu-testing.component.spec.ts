import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuTestingComponent } from './custom-menu-testing.component';

describe('CustomMenuTestingComponent', () => {
  let component: CustomMenuTestingComponent;
  let fixture: ComponentFixture<CustomMenuTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMenuTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMenuTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
