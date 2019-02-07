import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {GalleryFrecComponent} from './gallery-frec.component';

const routes: Routes = [
  {path: '', component: GalleryFrecComponent}
];

@NgModule({
  declarations: [
    GalleryFrecComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryFrecModule { }
