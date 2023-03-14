import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MfuErrorMessageComponent, ValidationErrorMessages, VALIDATION_ERROR_MESSAGES_TOKEN } from 'ngx-material-form-utils';
import { MfuInputComponent } from 'ngx-material-form-utils';

const validationErrorMessages: ValidationErrorMessages = {
  required: () => 'This field is very required.',
}

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
  providers: [
    {
      provide: VALIDATION_ERROR_MESSAGES_TOKEN,
      useValue: validationErrorMessages
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
