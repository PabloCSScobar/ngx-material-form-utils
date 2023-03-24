import { NgIf } from "@angular/common";
import { Component, Input, SkipSelf } from "@angular/core";
import { ControlContainer, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MfuBaseInput } from "../input/base-input";
import { MfuErrorMessage } from "../validation/error-message.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "mfu-password",
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MfuErrorMessage, NgIf, MatIconModule, MatButtonModule],
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
      <button *ngIf="passwordVisibilityToggle"
        style="margin-right: 2px;"
        (click)="togglePasswordVisibility()"
        class="mat-icon-button cdk-focused cdk-mouse-focused"
        mat-icon-button
        matRippleCentered="true"
        matRipple
        matSuffix
        type="button"
      >
        <mat-icon>{{ isPasswordVisible ? "visibility" : "visibility_off" }}</mat-icon>
      </button>
    </mat-form-field>
  `
})
export class MtuPasswordInputComponent extends MfuBaseInput {
  @Input() passwordVisibilityToggle = false;
  protected type : "text" | "password" = "password";
  
  togglePasswordVisibility() {
    this.type = this.type === "password" ? "text" : "password";
  }

  get isPasswordVisible() {
    return this.type === "text";
  } 
}