import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, SkipSelf, ViewChild } from "@angular/core";
import { ControlContainer, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldAppearance, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MfuErrorMessage } from "../validation/error-message.component";

@Component({
  selector: 'mfu-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MfuErrorMessage, NgIf],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ],
  template: `
    <mat-form-field [appearance]="appearance" style="width: 100%;">
      <mat-label *ngIf="label">{{label}}</mat-label>
      <mat-hint *ngIf="hint">{{hint}}</mat-hint>
      <input 
        [id]="id"
        [name]="name"
        [required]="required"
        [type]="type"
        [readonly]="readonly"
        [value]="value"
        matInput
        [formControlName]="controlName"
        [placeholder]="placeholder"
        (blur)="blur.emit($event)"
        (focus)="focus.emit($event)"
        />
      <mat-error *ngIf="showErrors" mfuErrorMessage/>
    </mat-form-field>
  `
})
export class MfuInputComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() required = false;
  @Input() type: string = 'text';
  @Input() readonly = false;
  @Input() value: any;
  @Input() controlName!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() showErrors = true;
  @Input() label?: string | null = null;
  @Input() placeholder: string = '';
  @Input() hint?: string | null = null;

  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();

  @ViewChild(MatInput) matInput!: MatInput;
}