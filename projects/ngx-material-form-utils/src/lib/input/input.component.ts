import { NgIf } from "@angular/common";
import { AfterViewInit, Component, forwardRef, Inject, Input, Optional, Self, ViewChild } from "@angular/core";
import { inject } from "@angular/core/testing";
import { ControlValueAccessor, DefaultValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldAppearance, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MAT_INPUT_VALUE_ACCESSOR } from "@angular/material/input";
import { MfuErrorMessageComponent } from "../validation/error-message.component";

@Component({
  selector: 'mfu-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MfuErrorMessageComponent, NgIf],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MfuInputComponent),
      multi: true
    }
  ],
  template: `
    <mat-form-field [appearance]="appearance">
      <mat-label *ngIf="label">{{label}}</mat-label>
      <input matInput [formControl]="control" [placeholder]="placeholder">
      <mat-error *ngIf="showErrors" mfuErrorMessage/>
    </mat-form-field>
  `
})
export class MfuInputComponent implements ControlValueAccessor, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.valueAccessor);
  }
  @ViewChild(DefaultValueAccessor) valueAccessor!: DefaultValueAccessor;
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() showErrors = true;
  @Input() label?: string | null = null;
  @Input() placeholder: string = '';


  writeValue(obj: any) {
    this.valueAccessor.writeValue(obj);
  }

  registerOnChange(fn: any) {
    this.valueAccessor.registerOnChange(fn);
  }

  registerOnTouched(fn: any) {
    this.valueAccessor.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.valueAccessor.setDisabledState(isDisabled);
  }
}