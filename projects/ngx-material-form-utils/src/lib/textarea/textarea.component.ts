import { NgIf } from "@angular/common";
import { Component, Input, SkipSelf, ViewChild } from "@angular/core";
import { ControlContainer, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MfuBaseInput } from "../input/base-input";
import { MfuErrorMessage } from "../validation/error-message.component";

@Component({
  selector: 'mfu-textarea',
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
      <textarea 
        [id]="id"
        [name]="name"
        [required]="required"
        [readonly]="readonly"
        [value]="value"
        [rows]="rows"
        [cols]="cols"
        matInput
        [formControlName]="controlName"
        [placeholder]="placeholder"
        (blur)="blur.emit($event)"
        (focus)="focus.emit($event)"
        ></textarea>
      <mat-error *ngIf="showErrors" mfuErrorMessage/>
    </mat-form-field>
  `
})
export class MfuTextareaComponent extends MfuBaseInput {
  @Input() rows?: number | null = null;
  @Input() cols?: number | null = null;

  @ViewChild(MatInput) matInput!: MatInput;  
}