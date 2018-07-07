import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeFacturaComponent } from './tipo-de-factura.component';

describe('TipoDeFacturaComponent', () => {
  let component: TipoDeFacturaComponent;
  let fixture: ComponentFixture<TipoDeFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDeFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
