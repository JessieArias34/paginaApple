import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecionChanComponent } from './secion-chan.component';

describe('SecionChanComponent', () => {
  let component: SecionChanComponent;
  let fixture: ComponentFixture<SecionChanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecionChanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecionChanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
