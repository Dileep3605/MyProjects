import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassWreckComponent } from './glass-wreck.component';

describe('GlassWreckComponent', () => {
  let component: GlassWreckComponent;
  let fixture: ComponentFixture<GlassWreckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassWreckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassWreckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
