import { Directive, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragResize]'
})
export class DragResizeDirective implements OnInit {

  @HostListener('click') onClick() {
    console.log('click');
    // this.element.nativeElement.style.marginLeft=20;
    // console.log("marzi"+this.element.nativeElement.style.marginLeft);
  }

  rectTop: number;
  rectLeft: number;

  constructor() { }

  ngOnInit() {
    const dragDiv = document.querySelector<HTMLElement>('.dragDiv');
    let isResizing = false;
    dragDiv.addEventListener('mousedown', mousedown);

    function mousedown(e: MouseEvent) {
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);

      let prevX = e.clientX;
      let prevY = e.clientY;


      function mousemove(e: MouseEvent) {
        if (!isResizing) {

          let newX = prevX - e.clientX;
          let newY = prevY - e.clientY;
          console.log(newX, newY);
          const rect = dragDiv.getBoundingClientRect();
          // console.log(rect);

          // console.log("left", rect.left);
          // console.log("top", rect.top);
          // if (rect.top > 0) {
          //   this.rectTop = rect.top;
          // }
          // console.log(this.rectTop);


          // dragDiv.style.left = rect.left - newX + 'px';
          // dragDiv.style.top = this.rectTop - newY + 'px';

          dragDiv.style.left = rect.left - newX + 'px';
          dragDiv.style.top = rect.top - newY + 'px';

          prevX = e.clientX;
          prevY = e.clientY;

        }
      }

      function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
      }
    }



    // select all handel div
    const resizers = document.querySelectorAll<HTMLElement>('.resizer');
    let currentResizer;

    for (let resizer of resizers) {
      resizer.addEventListener('mousedown', mousedown);

      function mousedown(e) {
        isResizing = true;
        currentResizer = e.target;

        let prevX = e.clientX;
        let prevY = e.clientY;

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup', mouseup);

        function mousemove(e) {
          const rect = dragDiv.getBoundingClientRect();

          if (currentResizer.classList.contains('three')) {
            dragDiv.style.width = rect.width - (prevX - e.clientX) + 'px';
            dragDiv.style.height = rect.height - (prevY - e.clientY) + 'px';
          } else if (currentResizer.classList.contains('four')) {
            dragDiv.style.width = rect.width + (prevX - e.clientX) + 'px';
            dragDiv.style.height = rect.height - (prevY - e.clientY) + 'px';
            dragDiv.style.left = rect.left - (prevX - e.clientX) + 'px';
          } else if (currentResizer.classList.contains('two')) {
            dragDiv.style.width = rect.width - (prevX - e.clientX) + 'px';
            dragDiv.style.height = rect.height + (prevY - e.clientY) + 'px';
            dragDiv.style.top = rect.top - (prevY - e.clientY) + 'px';
          } else {
            dragDiv.style.width = rect.width + (prevX - e.clientX) + 'px';
            dragDiv.style.height = rect.height + (prevY - e.clientY) + 'px';
            dragDiv.style.top = rect.top - (prevY - e.clientY) + 'px';
            dragDiv.style.left = rect.left - (prevX - e.clientX) + 'px';
          }


          prevX = e.clientX;
          prevY = e.clientY;
        }
        function mouseup() {
          window.removeEventListener('mousemove', mousemove);
          window.removeEventListener('mouseup', mouseup);
          isResizing = false;
        }
      }
    }
  }


}
