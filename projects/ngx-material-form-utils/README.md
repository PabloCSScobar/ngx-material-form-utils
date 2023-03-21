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
The library provides a component mfu-input which is used to simplify the creation of input fields with Angular Material. Its a wrapper for mat-form-field with built-in error handling.

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
Errors are handled by default, but you should add error messages in your module by providing VALIDATION_ERROR_MESSAGES_TOKEN (example in error handling section).

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

mfu-input also exposes matInput element wrapped by mfu-input. You can access it by using ViewChild decorator in your component:

```typescript
...
@ViewChild(MfuInputComponent) mfuInput: MfuInputComponent;
...
mfuInput.matInput
```


### Textarea Component
The mfu-textarea component is a wrapper for the Angular Material textarea with built-in error handling.

#### Setup
Import MfuTextareaComponent in your module:

```typescript
import { MfuTextareaComponent } from 'ngx-material-form-utils';
@NgModule({
  declarations: [
    ...
    MfuTextareaComponent,
  ]
})
```
#### Usage
Add mfu-textarea to your form:

component.ts
```typescript
export class AppComponent {
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    description: ['', Validators.required]
  });
}
```
component.html
```html
<form [formGroup]="exampleForm">
  <mfu-textarea controlName="description"/>
</form>
```
Errors are handled by default, but you should add error messages in your module by providing VALIDATION_ERROR_MESSAGES_TOKEN (example in error handling section).

### mfu-textarea inputs
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
controlName | string | - | Name of the control in the form. |
showErrors | boolean | true | Show errors of the textarea. |
appearance | MatFormFieldAppearance | 'outline' | Appearance of the textarea. |
label | string | - | Label of the textarea. |
placeholder | string | - | Placeholder of the textarea. |
hint | string | - | Hint of the textarea. |
required | boolean | false | Is the textarea required. |
readonly | boolean | false | Is the textarea readonly. |
value | string | - | Value of the textarea. |
id | string | - | ID of the textarea. |
name | string | - | Name of the textarea. |
rows | number | - | Number of rows in the textarea. |
cols | number | - | Number of cols in the textarea. |

### mfu-textarea outputs
| Name | Type | Description |
| --- | --- | --- |
| blur | EventEmitter<FocusEvent> | Emits when the textarea is blurred. |
| focus | EventEmitter<FocusEvent> | Emits when the textarea is focused. |
| input | EventEmitter<Event> | Emits when the textarea is changed. |

mfu-textarea also exposes the matInput element wrapped by the component. You can access it by using the ViewChild decorator in your component:

```typescript
...
@ViewChild(MfuTextareaComponent) mfuTextarea: MfuTextareaComponent;
...
mfuTextarea.matInput
```

### Select Component
The mfu-select component is a wrapper for the Angular Material select with built-in error handling.

#### Setup
Import MfuSelectComponent in your module:

```typescript
import { MfuSelectComponent } from 'ngx-material-form-utils';
@NgModule({
  declarations: [
    ...
    MfuSelectComponent,
  ]
})
```
#### Usage
Add mfu-select to your form:

component.ts
```typescript
export class AppComponent {
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    country: ['', Validators.required]
  });

  countries = [
    { value: 'us', display: 'United States' },
    { value: 'ca', display: 'Canada' },
  ];
}
```

component.html
```html
<form [formGroup]="exampleForm">
  <mfu-select controlName="country" [items]="countries"/>
</form>
```
Errors are handled by default, but you should add error messages in your module by providing VALIDATION_ERROR_MESSAGES_TOKEN (example in error handling section).

### mfu-select inputs
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
controlName | string | - | Name of the control in the form. |
showErrors | boolean | true | Show errors of the select. |
appearance | MatFormFieldAppearance | 'outline' | Appearance of the select. |
label | string | - | Label of the select. |
hint | string | - | Hint of the select. |
required | boolean | false | Is the select required. |
id | string | - | ID of the select. |
name | string | - | Name of the select. |
items | Array<{ value: any, display: string }> | - | Array of objects with value and display properties for the select options. |
multiple | boolean | false | Enables multiple selection if set to true. |

### mfu-select outputs

| Name | Type | Description |
| --- | --- | --- |
selectionChange | EventEmitter<MatSelectChange> | Emits when the selection is changed. |
valueChange | EventEmitter<any> | Emits when the value of the select is changed. |
closed | EventEmitter<void> | Emits when the select is closed. |
opened | EventEmitter<void> | Emits when the select is opened. |
focus | EventEmitter<FocusEvent> | Emits when the select is focused. |
blur | EventEmitter<FocusEvent> | Emits when the select is blurred. |

mfu-select also exposes the matSelect element wrapped by the component. You can access it by using the ViewChild decorator in your component:

```typescript
...
@ViewChild(MfuSelectComponent) mfuSelect: MfuSelectComponent;
...
mfuSelect.matSelect
```

### Form Status Indicator Component
The mfu-form-status-indicator component provides a visual representation of the overall status of a form, indicating whether the form is valid or invalid. It also supports smooth animations when the form status changes.

#### Setup
Import MfuFormStatusIndicatorComponent in your module:

```typescript
import { MfuFormStatusIndicatorComponent } from 'ngx-material-form-utils';

@NgModule({
  declarations: [
    ...
    MfuFormStatusIndicatorComponent,
  ]
})
```
#### Usage
Add mfu-form-status-indicator to your form:

component.ts
```typescript
export class AppComponent {
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required]
  });
}
```

component.html
```html
<form [formGroup]="exampleForm">
  <mfu-form-status-indicator/>
  <mfu-input controlName="name"/>
  <mfu-input controlName="age">
</form>
```
Form status indicator will be blank in initial state, invalid (red color bar) when some form control is invalid and touched and valid (green color bar) when all form controls are valid.

### mfu-form-status-indicator inputs
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
showAnimation | boolean | true | Enable or disable status change animations. |
statusHeight | number | 5 | The height of the status indicator in pixels. |
validColor | string | 'green' | The color of the status indicator when the form is valid. |
invalidColor | string | 'red' | The color of the status indicator when the form is invalid. |

By default, the component will display a colored bar above the form. The default colors are:
- Valid: green
- Invalid: red


You can change these colors by modifying the corresponding validColor and invalidColor input properties in your component.

Animations
The mfu-form-status-indicator component includes smooth slide-in and slide-out animations for the status indicator. To disable animations, set the showAnimation input property to false.