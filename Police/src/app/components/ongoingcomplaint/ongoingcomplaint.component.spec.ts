import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingcomplaintComponent } from './ongoingcomplaint.component';

describe('OngoingcomplaintComponent', () => {
  let component: OngoingcomplaintComponent;
  let fixture: ComponentFixture<OngoingcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
