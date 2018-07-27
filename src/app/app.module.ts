import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SeoService } from './shared/services/seo.service';
import { NoopAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [ToastrService, SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
