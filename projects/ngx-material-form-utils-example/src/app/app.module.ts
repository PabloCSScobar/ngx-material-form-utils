import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MfuErrorMessageComponent } from 'ngx-material-form-utils';
import { MfuInputComponent } from 'ngx-material-form-utils';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MfuErrorMessageComponent,
    MfuInputComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
