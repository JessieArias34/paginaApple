import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaBarra2Component } from './segunda-barra2.component';

describe('SegundaBarra2Component', () => {
  let component: SegundaBarra2Component;
  let fixture: ComponentFixture<SegundaBarra2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaBarra2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaBarra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
