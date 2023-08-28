import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoshijoComponent } from './empleadoshijo.component';

describe('EmpleadoshijoComponent', () => {
  let component: EmpleadoshijoComponent;
  let fixture: ComponentFixture<EmpleadoshijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoshijoComponent]
    });
    fixture = TestBed.createComponent(EmpleadoshijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
