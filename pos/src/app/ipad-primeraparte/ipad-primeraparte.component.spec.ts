import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadPrimeraparteComponent } from './ipad-primeraparte.component';

describe('IpadPrimeraparteComponent', () => {
  let component: IpadPrimeraparteComponent;
  let fixture: ComponentFixture<IpadPrimeraparteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadPrimeraparteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadPrimeraparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
