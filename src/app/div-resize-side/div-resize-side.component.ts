import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-div-resize-side',
  templateUrl: './div-resize-side.component.html',
  styleUrls: ['./div-resize-side.component.scss']
})
export class DivResizeSideComponent implements OnInit, AfterViewInit {
  @ViewChild('dragDivId') dragDiv: ElementRef;
  constructor() { }
  i = 0;
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // console.log(this.dragDiv.nativeElement);
    this.resizer();
  }

  resizer() {
    // console.log(this.dragDiv)
    // Minimum resizable area
    const minWidth = 100;
    const minHeight = 100;

    // Thresholds
    const MARGINS = 4;

    // End of what's configurable.
    let clicked = null;
    let onRightEdge;
    let onBottomEdge;
    let onLeftEdge;
    let onTopEdge;

    let rightScreenEdge;
    let bottomScreenEdge;


    let b;
    let x;
    let y;

    let redraw = false;

    // const dragDiv = document.getElementById('dragDiv');
    const dragDiv = this.dragDiv.nativeElement;


    // Mouse events
    dragDiv.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);


    function onMouseDown(e) {
      onDown(e);
      e.preventDefault();
    }

    function onDown(e) {
      calc(e);

      const isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

      clicked = {
        x,
        y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing,
        isMoving: !isResizing && canMove(),
        onTopEdge,
        onLeftEdge,
        onRightEdge,
        onBottomEdge
      };
    }

    function canMove() {
      // return x > 0 && x < b.width && y > 0 && y < b.height
      //   && y < 100;
      return x > 0 && x < b.width && y > 0 && y < b.height;

    }

    function calc(e) {
      // console.log(e.clientX);
      // console.log(b.left);
      b = dragDiv.getBoundingClientRect();
      x = e.clientX - b.left;
      y = e.clientY - b.top;

      onTopEdge = y < MARGINS;
      onLeftEdge = x < MARGINS;
      onRightEdge = x >= b.width - MARGINS;
      onBottomEdge = y >= b.height - MARGINS;

      rightScreenEdge = window.innerWidth - MARGINS;
      bottomScreenEdge = window.innerHeight - MARGINS;
    }

    let e;

    function onMove(ee) {
      calc(ee);

      e = ee;

      redraw = true;

    }

    function animate() {

      requestAnimationFrame(animate);

      if (!redraw) { return; }

      redraw = false;

      if (clicked && clicked.isResizing) {

        if (clicked.onRightEdge) { dragDiv.style.width = Math.max(x, minWidth) + 'px'; }
        if (clicked.onBottomEdge) { dragDiv.style.height = Math.max(y, minHeight) + 'px'; }

        if (clicked.onLeftEdge) {
          console.log(clicked.cx);
          console.log(e.clientX)
          // var currentWidth = minWidth;
          // const currentWidth = clicked.cx - e.clientX + clicked.w;
          const currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
          if (currentWidth > minWidth) {
            dragDiv.style.width = currentWidth + 'px';
            dragDiv.style.left = e.clientX + 'px';
          }
        }

        if (clicked.onTopEdge) {
          const currentHeight = Math.max(clicked.cy - e.clientY + clicked.h, minHeight);
          if (currentHeight > minHeight) {
            dragDiv.style.height = currentHeight + 'px';
            dragDiv.style.top = e.clientY + 'px';
          }
        }


        return;
      }

      if (clicked && clicked.isMoving) {
        // console.log(clicked);
        // console.log(e);
        // console.log(e.clientY + 'e');
        // console.log(clicked.y + 'c');
        // moving
        dragDiv.style.top = (e.clientY - clicked.y) + 'px';
        dragDiv.style.left = (e.clientX - clicked.x) + 'px';

        return;
      }

      // This code executes when mouse moves without clicking

      // style cursor
      if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
        dragDiv.style.cursor = 'nwse-resize';
      } else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
        dragDiv.style.cursor = 'nesw-resize';
      } else if (onRightEdge || onLeftEdge) {
        dragDiv.style.cursor = 'ew-resize';
      } else if (onBottomEdge || onTopEdge) {
        dragDiv.style.cursor = 'ns-resize';
      } else if (canMove()) {
        dragDiv.style.cursor = 'move';
      } else {
        dragDiv.style.cursor = 'default';
      }
    }

    animate();

    function onUp(e) {
      calc(e);
      clicked = null;
    }

  }

  onClick() {

    this.dragDiv.nativeElement.style.position = this.i === 0 ? 'absolute' : 'fixed';
    // document.getElementById('dragDiv').style.position = this.i === 0 ? 'absolute' : 'fixed';
    this.i = this.i === 0 ? 1 : 0;
  }

}
