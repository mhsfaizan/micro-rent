import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationrentalComponent } from './workstationrental.component';

describe('WorkstationrentalComponent', () => {
  let component: WorkstationrentalComponent;
  let fixture: ComponentFixture<WorkstationrentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstationrentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstationrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
