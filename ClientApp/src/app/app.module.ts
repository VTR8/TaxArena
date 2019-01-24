import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';


const appRoutes: Routes = [
  { path:"taxArena",component: CarouselComponent},
  { path:"gallery",component: GalleryComponent },
  { path: '',redirectTo: '/taxArena',pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
