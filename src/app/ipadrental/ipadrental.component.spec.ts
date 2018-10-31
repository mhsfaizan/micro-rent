import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadrentalComponent } from './ipadrental.component';

describe('IpadrentalComponent', () => {
  let component: IpadrentalComponent;
  let fixture: ComponentFixture<IpadrentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadrentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
