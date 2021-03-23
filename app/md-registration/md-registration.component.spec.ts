import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdRegistrationComponent } from './md-registration.component';

describe('MdRegistrationComponent', () => {
  let component: MdRegistrationComponent;
  let fixture: ComponentFixture<MdRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
