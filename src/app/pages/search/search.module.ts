import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBoxModule } from '../../@shared/components/search-box/search-box.module';
import { MatCardModule } from '@angular/material/card';
import { SearchRoutingModule } from './search-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    MatCardModule,
    SearchRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
