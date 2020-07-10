import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasMapImageComponent } from './canvas-map-image.component';

describe('CanvasMapImageComponent', () => {
  let component: CanvasMapImageComponent;
  let fixture: ComponentFixture<CanvasMapImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasMapImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasMapImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
