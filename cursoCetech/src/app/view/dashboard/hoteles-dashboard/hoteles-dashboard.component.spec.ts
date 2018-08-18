import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesDasboardComponent } from './hoteles-dashboard.component';

describe('HotelesComponent', () => {
  let component: HotelesDasboardComponent;
  let fixture: ComponentFixture<HotelesDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
