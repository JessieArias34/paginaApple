import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaBarraComponent } from './segunda-barra.component';

describe('SegundaBarraComponent', () => {
  let component: SegundaBarraComponent;
  let fixture: ComponentFixture<SegundaBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
