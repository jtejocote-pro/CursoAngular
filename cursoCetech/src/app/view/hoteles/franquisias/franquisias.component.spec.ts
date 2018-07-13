import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranquisiasComponent } from './franquisias.component';

describe('FranquisiasComponent', () => {
  let component: FranquisiasComponent;
  let fixture: ComponentFixture<FranquisiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranquisiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranquisiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
