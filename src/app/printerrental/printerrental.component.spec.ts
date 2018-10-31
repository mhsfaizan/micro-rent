import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterrentalComponent } from './printerrental.component';

describe('PrinterrentalComponent', () => {
  let component: PrinterrentalComponent;
  let fixture: ComponentFixture<PrinterrentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterrentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
