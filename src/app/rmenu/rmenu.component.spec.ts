import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMenuComponent } from './rmenu.component';

describe('RMenuComponent', () => {
  let component: RMenuComponent;
  let fixture: ComponentFixture<RMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
