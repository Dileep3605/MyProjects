import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNDComponent } from './dnd.component';

describe('DNDComponent', () => {
  let component: DNDComponent;
  let fixture: ComponentFixture<DNDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
