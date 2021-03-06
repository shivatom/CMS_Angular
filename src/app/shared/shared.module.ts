import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { animation } from '@angular/animations';
import { SettingService } from './services/setting.service';
import { PartnersService } from './services/partners.service';
import { TeamsService } from './services/teams.service';
import { TestimonialsService } from './services/testimonials.service';
import { ServicesService } from './services/services.service';
import { PostService } from './services/post.service';
import { PostCategoryService } from './services/post-category.service';
import { BannerTypeService } from './services/banner-type.service';
import { MenuService } from './services/menu.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { PageService } from './services/page.service';
import { BannerService } from './services/banner.service';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbAccordionConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionsService } from './services/sections.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IcheckDirective } from './directives/icheck.directive';
import { ProjectCategoryService } from './services/project-category.service';
import { ProjectService } from './services/project.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { GetValuePipe } from './pipes/get-value.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';
import { HideByRoleDirective } from './directives/hide-by-role.directive';
import { UserService } from './services/user.service';
import { ContactService } from './services/contact.service';
import { SafePipe } from './pipes/safe.pipe';
import { EllipsisPipePipe } from './pipes/ellipsis-pipe.pipe';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [IcheckDirective, ReversePipe, GetValuePipe, AlertComponent, ImagePopupComponent, SafePipe, EllipsisPipePipe, HideByRoleDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    HttpClientModule,
    Angular2FontawesomeModule,
    NgxDatatableModule,
    IcheckDirective,
    ReversePipe,
    GetValuePipe,
    CustomFormsModule,
    SafePipe,
    EllipsisPipePipe,
    HideByRoleDirective,
  ],
  providers: [ ReversePipe, UserService, EllipsisPipePipe, NgbActiveModal, GetValuePipe, BannerService , BannerTypeService,PageService, MenuService, FormBuilder,NgbAccordionConfig ,SectionsService, PostCategoryService, PostService, ProjectCategoryService, ProjectService,ServicesService, TestimonialsService, TeamsService, PartnersService, SettingService, ContactService, SafePipe],
  entryComponents: [
    AlertComponent,
    ImagePopupComponent
  ]
})
export class SharedModule { }
