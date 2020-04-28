import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {DataTableModule} from 'primeng/datatable';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule, ContextMenuModule, MessageModule, MessagesModule, OverlayPanelModule, SelectButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/tabview';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {provideConfig} from './util/social-auth-config';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {AppComponent} from './app.component';
import {AuthGuard} from './util/auth.guard';
import {JwtInterceptor} from './util/jwt.interceptor';
import {ToastModule} from 'primeng/toast';
import {BsDatepickerModule, DatepickerModule, PopoverModule, TimepickerModule} from 'ngx-bootstrap';
import {KeyFilterModule} from 'primeng/keyfilter';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ArchwizardModule} from 'angular-archwizard';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TimeFormat} from 'src/app/util/TimeFormat';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';
import {NgxStripeModule} from 'ngx-stripe';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SliderModule} from 'primeng/slider';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {ListboxModule} from 'primeng/listbox';
import {ChartModule} from 'primeng/chart';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#000000',
  'bgsOpacity': 0.5,
  'bgsPosition': 'bottom-right',
  'bgsSize': 60,
  'bgsType': 'three-bounce',
  'blur': 5,
  'fgsColor': '#ffffff',
  'fgsPosition': 'center-center',
  'fgsSize': 60,
  'fgsType': 'fading-circle',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'overlayBorderRadius': '0',
  'overlayColor': 'rgba(40, 40, 40, 0.8)',
  'pbColor': '#00ACC1',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': false,
  'text': 'Loading',
  'textColor': '#FFFFFF',
  'textPosition': 'center-center',
  'threshold': 500
};

@NgModule({
  declarations: [
    AppComponent,
    TimeFormat
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTableModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    PaginatorModule,
    TabViewModule,
    TableModule,
    CalendarModule,
    TreeModule,
    RadioButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    ContextMenuModule,
    SelectButtonModule,
    ArchwizardModule,
    MessagesModule,
    ToastModule,
    TableModule,
    TreeTableModule,
    ButtonModule,
    SocialLoginModule,
    KeyFilterModule,
    MenuModule,
    CardModule,
    DialogModule,
    MessageModule,
    CheckboxModule,
    InputTextareaModule,
    EditorModule,
    FileUploadModule,
    TriStateCheckboxModule,
    InputSwitchModule,
    SliderModule,
    ListboxModule,
    ChartModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    NgxStripeModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    MessageService,
    ConfirmationService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
