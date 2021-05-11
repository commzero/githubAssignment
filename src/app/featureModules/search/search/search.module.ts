import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCustomInterceptorService } from 'src/app/core/configs/http-custom-interceptor.service';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    SearchService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpCustomInterceptorService, 
      multi: true 
    }
  ]
})
export class SearchModule { }
