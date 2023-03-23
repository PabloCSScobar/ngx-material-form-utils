import { NgIf } from "@angular/common";
import { Component, SkipSelf } from "@angular/core";
import { ControlContainer, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MfuBaseInput } from "../input/base-input";
import { MfuInputComponent } from "../input/input.component";
import { MfuErrorMessage } from "../validation/error-message.component";

@Component({
  selector: "mfu-password-input",
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
export class MtuPasswordInputComponent extends MfuBaseInput {
  protected type : "text" | "password" = "password";

}