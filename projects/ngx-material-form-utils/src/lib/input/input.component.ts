import { NgIf } from "@angular/common";
import { AfterViewInit, Component, forwardRef, Inject, Input, Optional, Self, SkipSelf, ViewChild } from "@angular/core";
import { inject } from "@angular/core/testing";
import { ControlContainer, ControlValueAccessor, DefaultValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldAppearance, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MAT_INPUT_VALUE_ACCESSOR } from "@angular/material/input";
import { MfuErrorMessageComponent } from "../validation/error-message.component";

@Component({
  selector: 'mfu-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MfuErrorMessageComponent, NgIf],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ],
  template: `
    <mat-form-field [appearance]="appearance">
      <mat-label *ngIf="label">{{label}}</mat-label>
      <input matInput [formControlName]="controlName" [placeholder]="placeholder">
      <mat-error *ngIf="showErrors" mfuErrorMessage/>
    </mat-form-field>
  `
})
export class MfuInputComponent {
  @Input() controlName!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() showErrors = true;
  @Input() label?: string | null = null;
  @Input() placeholder: string = '';

}