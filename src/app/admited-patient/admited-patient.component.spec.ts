import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitedPatientComponent } from './admited-patient.component';

describe('AdmitedPatientComponent', () => {
  let component: AdmitedPatientComponent;
  let fixture: ComponentFixture<AdmitedPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitedPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
