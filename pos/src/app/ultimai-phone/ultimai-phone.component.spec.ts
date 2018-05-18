import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaiPhoneComponent } from './ultimai-phone.component';

describe('UltimaiPhoneComponent', () => {
  let component: UltimaiPhoneComponent;
  let fixture: ComponentFixture<UltimaiPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimaiPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimaiPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
