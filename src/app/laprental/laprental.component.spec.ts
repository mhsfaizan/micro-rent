import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaprentalComponent } from './laprental.component';

describe('LaprentalComponent', () => {
  let component: LaprentalComponent;
  let fixture: ComponentFixture<LaprentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaprentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaprentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
