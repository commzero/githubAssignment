import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchModule } from '../featureModules/search/search/search.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    HttpClientModule,
    SearchModule,
    FormsModule
  ]
})
export class CoreModule { }
