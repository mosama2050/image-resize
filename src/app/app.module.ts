import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dadwmyrij'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
