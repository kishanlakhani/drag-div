import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { DragResizeDirective } from './drag-resize.directive';
import { DivResizeSideComponent } from './div-resize-side/div-resize-side.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { CanvasMapImageComponent } from './canvas-map-image/canvas-map-image.component';

@NgModule({
  declarations: [
    AppComponent,
    DragResizeDirective,
    DivResizeSideComponent,
    ImageCropComponent,
    CanvasMapImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
    // MatTooltipModule,
    // MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
