import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktoprentalComponent } from './desktoprental.component';

describe('DesktoprentalComponent', () => {
  let component: DesktoprentalComponent;
  let fixture: ComponentFixture<DesktoprentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktoprentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktoprentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
