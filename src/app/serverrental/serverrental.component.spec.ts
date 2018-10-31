import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerrentalComponent } from './serverrental.component';

describe('ServerrentalComponent', () => {
  let component: ServerrentalComponent;
  let fixture: ComponentFixture<ServerrentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerrentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
