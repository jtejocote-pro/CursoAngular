import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstacionamientoComponent } from './registro-estacionamiento.component';

describe('RegistroEstacionamientoComponent', () => {
  let component: RegistroEstacionamientoComponent;
  let fixture: ComponentFixture<RegistroEstacionamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEstacionamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
