import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-map-image',
  templateUrl: './canvas-map-image.component.html',
  styleUrls: ['./canvas-map-image.component.scss']
})
export class CanvasMapImageComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas') myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
  }


}
