import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogueComponent } from './my-dialogue.component';

describe('MyDialogueComponent', () => {
  let component: MyDialogueComponent;
  let fixture: ComponentFixture<MyDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
