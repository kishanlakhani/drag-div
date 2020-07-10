import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  i = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  // onClick(): void{
  //   let floorElements = document.getElementsByClassName("dragDiv")[0] as HTMLElement;
  //   // document.querySelector('.divDrag').style = 'fixed';
  //   floorElements.style.position = this.i === 0 ? 'absolute' : 'fixed';
  //   this.i = this.i === 0 ? 1 : 0; 
  //   // floorElements.style.position = floorElements.style.position === 'fixed' ? 'absolute' : 'fixed';
  // }







  // title = 'angular-image-uploader';

  // imageChangedEvent: any = '';
  // croppedImage: any = '';



  // fileChangeEvent(event: any): void {
  //     this.imageChangedEvent = event;
  // }
  // imageCropped(event: ImageCroppedEvent) {
  //     this.croppedImage = event.base64;
  // }
  // imageLoaded() {
  //     // show cropper
  // }
  // cropperReady() {
  //     // cropper ready
  // }
  // loadImageFailed() {
  //     // show message
  // }






}
