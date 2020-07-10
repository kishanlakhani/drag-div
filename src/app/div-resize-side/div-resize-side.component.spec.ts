import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivResizeSideComponent } from './div-resize-side.component';

describe('DivResizeSideComponent', () => {
  let component: DivResizeSideComponent;
  let fixture: ComponentFixture<DivResizeSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivResizeSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivResizeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
