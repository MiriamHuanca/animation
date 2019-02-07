import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {GalleryFrecTwoComponent} from './gallery-frec-two.component';


const routes: Routes = [
  {path: '', component: GalleryFrecTwoComponent}
];

@NgModule({
  declarations: [
    GalleryFrecTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryFrecTwoModule { }
