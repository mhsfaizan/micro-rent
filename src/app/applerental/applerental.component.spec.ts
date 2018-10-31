import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplerentalComponent } from './applerental.component';

describe('ApplerentalComponent', () => {
  let component: ApplerentalComponent;
  let fixture: ComponentFixture<ApplerentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplerentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplerentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
