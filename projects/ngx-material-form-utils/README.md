# Ngx-Material-form-utils

ngx-material-form-utils is a library that provides components which are used to simplify the creation of forms with Angular Material.

## Installation
At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install ngx-material-form-utils library:

```bash
$ npm install ngx-material-form-utils
```

## Documentation
### Error handling
The library provides a directive mfuErrorMessage which is used to display error messages provided in InjectionToken.

#### Setup
Import MfuErrorMessage and VALIDATION_ERROR_MESSAGES_TOKEN in your module. Then provide VALIDATION_ERROR_MESSAGES_TOKEN with your custom error messages.


```typescript
import { MfuErrorMessage, ValidationErrorMessages, VALIDATION_ERROR_MESSAGES_TOKEN } from 'ngx-material-form-utils';

const validationErrorMessages: ValidationErrorMessages = {
  required: () => 'This field is very required.',
}

NgModule({
  declarations: [
    ...
    MfuErrorMessage,
  ],
  providers: [
    {
      provide: VALIDATION_ERROR_MESSAGES_TOKEN,
      useValue: validationErrorMessages,
    },
  ],
})
```

If your validator returns some parameters, you can also use them in your error message.
Example

```typescript
const validationErrorMessages: ValidationErrorMessages = {
  minlength: (params) => `This field should be at least ${params.requiredLength} characters long.`,
  min: (error) => `The minimum value is ${error.min}. You entered ${error.actual}.`,
}
```
#### Usage
Add mfuErrorMessage to ```<mat-error>``` in your mat-form-field to allow displaying your error messages.

```html
<mat-form-field appearance="outline">
<mat-label>Email</mat-label>
  <input
    formControlName="email"
    placeholder="Enter email"
    matInput
  />
  <mat-hint>Enter some email</mat-hint>
  <mat-error mfuErrorMessage></mat-error>
</mat-form-field>
```

### Input field
The library provides a component mfu-input which is used to simplify the creation of input fields with Angular Material. Its a wrapper mat-form-field with matInput and mat-error.

#### Setup
Import MfuInputComponent in your module.

```typescript
import { MfuInputComponent } from 'ngx-material-form-utils';

NgModule({
  declarations: [
    ...
    MfuInputComponent,
  ]
})
```

#### Basic usage
Add mfuInput to your form.

component.ts
```typescript
export class AppComponent {
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    username: ['', Validators.required]
  });
}
```
component.html
```html
<form [formGroup]="exampleForm">
  <mfu-input controlName="username"/>
</form>
```
Errors are handled by default, but you should add error messages in your module by providing VALIDATION_ERROR_MESSAGES_TOKEN (example above).

### mfu-input inputs
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| controlName | string | - | Name of the control in the form. |
| showErrors | boolean | true | Show errors of the input field. |
| appearance | MatFormFieldAppearance | 'outline' | Appearance of the input field. |
| label | string | - | Label of the input field. |
| placeholder | string | - | Placeholder of the input field. |
| hint | string | - | Hint of the input field. |
| required | boolean | false | Is the input field required. |
| type | string | 'text' | Type of the input field. |
| value | string | - | Value of the input field. |
| name | string | - | Name of the input field. |

### mfu-input outputs
| Name | Type | Description |
| --- | --- | --- |
| blur | EventEmitter<FocusEvent> | Emits when the input field is blurred. |
| focus | EventEmitter<FocusEvent> | Emits when the input field is focused. |
| input | EventEmitter<Event> | Emits when the input field is changed. |

mfu-input also exposes matInput element wrapped by mfu-input. You can access it by using ViewChild decorator.

```typescript
...
@ViewChild(MfuInputComponent) mfuInput: MfuInputComponent;
...
mfuInput.matInput
```
