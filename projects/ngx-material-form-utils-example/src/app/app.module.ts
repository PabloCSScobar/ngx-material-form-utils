import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MfuInputComponent, MfuTextareaComponent, MfuSelectComponent, MfuFormStatusIndicatorComponent, MfuActionConfirmModule } from 'ngx-material-form-utils';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MfuErrorMessage, ValidationErrorMessages, VALIDATION_ERROR_MESSAGES_TOKEN } from 'ngx-material-form-utils';
import { MatButtonModule } from '@angular/material/button';

const validationErrorMessages: ValidationErrorMessages = {
  required: () => 'This field is very required.',
  min: (error: any) => `The minimum value is ${error.min}. You entered ${error.actual}.`,
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatButtonModule,
    MfuErrorMessage,
    MfuInputComponent,
    MfuTextareaComponent,
    MfuFormStatusIndicatorComponent,
    MfuSelectComponent,
    MfuActionConfirmModule,
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
