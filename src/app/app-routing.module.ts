import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './primeng/form/form.component';
import { ChartPngComponent } from './primeng/chart-png/chart-png.component';
import { FileuploadPngComponent } from './primeng/fileupload-png/fileupload-png.component';
import { PtableComponent } from './primeng/ptable/ptable.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'form-path', component: FormComponent },
    { path: 'chart-path', component: ChartPngComponent },
    { path: 'fileupload-path', component: FileuploadPngComponent },
    { path: 'table-path', component: PtableComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
