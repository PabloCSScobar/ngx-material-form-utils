import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { AbstractControl } from "@angular/forms";

export type ValidationErrorMessages = {
  [key: string]: (err: { [Key: string]: any } | undefined) => string;
};

export const VALIDATION_ERROR_MESSAGES_TOKEN = new InjectionToken<ValidationErrorMessages>('validation-error-messages');

const DEFAULT_VALIDATION_ERROR_MESSAGES: ValidationErrorMessages = {
  email: () => 'Please enter a valid email address',
  passwordStrength: () =>
    'Password must contain at least 8 characters, including a lowercase/uppercase letter and a number',
  passwordMatch: () => 'Passwords do not match',
  required: () => 'This field is required',
  min: (err) => `Minimum value for this field is ${err?.["min"]}`,
  max: (err) => `Maximum value for this field is ${err?.["max"]}`,
  oneRequired: () => 'At least one field is required',
  minlength: (err) => `Minimum ${err?.["requiredLength"]} characters are required`,
  maxlength: (err) => `Maximum ${err?.["requiredLength"]} characters are allowed`,
  startsWith: (err) => `Field must start with the phrase ${err}`,
  digits: () => 'Only digits are allowed',
}

@Injectable({
  providedIn: "root"
})
export class ErrorMessageService {
  private messages: ValidationErrorMessages;

  constructor(@Optional() @Inject(VALIDATION_ERROR_MESSAGES_TOKEN) messages: ValidationErrorMessages) {
    this.messages = messages ?? DEFAULT_VALIDATION_ERROR_MESSAGES;
  }
  errorMessage(control: AbstractControl | null | undefined): string | null {
    if (!control) return null;
    for (const key in control.errors) {
      if (control.errors.hasOwnProperty(key) && control.touched) {
        return this.getValidationMessage(
          key,
          control.errors[key]
        );
      }
    }
    return null;
  }

  private getValidationMessage(
    validator: keyof ValidationErrorMessages,
    validationError: any = null
  ): string | null {
    return this.messages[validator](validationError) ?? null;
  }
}
