import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './primeng/input/input.component';
import { DynamicTextInputComponent } from './primeng/dynamic-text-input/dynamic-text-input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './primeng/form/form.component';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
/////
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DynamicFormComponent } from './mui/dynamic-form/dynamic-form.component';
//material4import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import {MatChipsModule} from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';
import { MuiFormComponent } from './mui/mui-form/mui-form.component';
import { PtableComponent } from './primeng/ptable/ptable.component';
import { ChartPngComponent } from './primeng/chart-png/chart-png.component';
import { DynamicChartPngComponent } from './primeng/dynamic-chart-png/dynamic-chart-png.component';
import { DropdownPngComponent } from './primeng/dropdown-png/dropdown-png.component';
import { DynamicDropdownPngComponent } from './primeng/dynamic-dropdown-png/dynamic-dropdown-png.component';
import { FileuploadPngComponent } from './primeng/fileupload-png/fileupload-png.component';
import { DynamicFileuploadPngComponent } from './primeng/dynamic-fileupload-png/dynamic-fileupload-png.component';
import { DynamicCalenderPngComponent } from './primeng/dynamic-calender-png/dynamic-calender-png.component';
import { CalenderPngComponent } from './primeng/calender-png/calender-png.component';
import { FileuploadMuiComponent } from './mui/fileupload-mui/fileupload-mui.component';
import { FileuploadDynamicMuiComponent } from './mui/fileupload-dynamic-mui/fileupload-dynamic-mui.component';
import { ChartMuiComponent } from './mui/chart-mui/chart-mui.component';
import { DynamicMuiComponent } from './mui/dynamic-mui/dynamic-mui.component';
import { GridMuiComponent } from './mui/grid-mui/grid-mui.component';
import { DynamicGridMuiComponent } from './mui/dynamic-grid-mui/dynamic-grid-mui.component';
import { MultiplelistMuiComponent } from './mui/multiplelist-mui/multiplelist-mui.component';
import { DynamicMultiplelistMuiComponent } from './mui/dynamic-multiplelist-mui/dynamic-multiplelist-mui.component';
import { DropdownMuiComponent } from './mui/dropdown-mui/dropdown-mui.component';
import { DynamicDropdownMuiComponent } from './mui/dynamic-dropdown-mui/dynamic-dropdown-mui.component';
import { BarD3Component } from './d3.js/bar-d3/bar-d3.component';
import { DynamicBarD3Component } from './d3.js/dynamic-bar-d3/dynamic-bar-d3.component';
import { ImageGalleryPngComponent } from './primeng/image-gallery-png/image-gallery-png.component';
import { DynamicImageGalleryPngComponent } from './primeng/dynamic-image-gallery-png/dynamic-image-gallery-png.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DynamicTextInputComponent,
    DashboardComponent,
    HeaderComponent,
    FormComponent,
    DynamicFormComponent,
    MuiFormComponent,
    PtableComponent,
    ChartPngComponent,
    DynamicChartPngComponent,
    DropdownPngComponent,
    DynamicDropdownPngComponent,
    FileuploadPngComponent,
    DynamicFileuploadPngComponent,
    DynamicCalenderPngComponent,
    CalenderPngComponent,
    FileuploadMuiComponent,
    FileuploadDynamicMuiComponent,
    ChartMuiComponent,
    DynamicMuiComponent,
    GridMuiComponent,
    DynamicGridMuiComponent,
    MultiplelistMuiComponent,
    DynamicMultiplelistMuiComponent,
    DropdownMuiComponent,
    DynamicDropdownMuiComponent,
    BarD3Component,
    DynamicBarD3Component,
    ImageGalleryPngComponent,
    DynamicImageGalleryPngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    ToastModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    PanelModule,
    MessageModule,
    AutoCompleteModule,
    InputMaskModule,
    FileUploadModule,
    PasswordModule,
    DividerModule,
    MultiSelectModule,
    CalendarModule,
    //material ui
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    NoopAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    NgChartsModule,
    MatSnackBarModule,
    MatTableModule,
    MatChipsModule,
    MatTooltipModule,
    MatSelectModule,
    MatAutocompleteModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
