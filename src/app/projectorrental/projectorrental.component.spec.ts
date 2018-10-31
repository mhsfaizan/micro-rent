import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectorrentalComponent } from './projectorrental.component';

describe('ProjectorrentalComponent', () => {
  let component: ProjectorrentalComponent;
  let fixture: ComponentFixture<ProjectorrentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectorrentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectorrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
