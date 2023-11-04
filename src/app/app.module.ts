import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ButtonComponent } from './button/button.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from './form.reducer';
import { UserEffects } from './form.effect';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ButtonComponent,
    ApiCallComponent,
    FormComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({userDetails : UserReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
