import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ControlContainer, FormGroup, FormGroupDirective, NgForm } from "@angular/forms";

@Component({
  selector: "mfu-form-status-indicator",
  imports: [NgIf],
  template: `<div class="status-wrapper">
    <div *ngIf="form.form.invalid && form.form.touched" class="invalid"></div>
    <div *ngIf="form.form.valid && form.form.touched" class="valid"></div>
  </div>`,
  styles: [`
  .status-wrapper {
    min-height: 5px;
    width: 100%;
  }
  .invalid {
    height: 5px;
    width: 100%;
    background-color: red;
  }
  .valid {
    height: 5px;
    width: 100%;
    background-color: green;
  }
  `],
  standalone: true
})
export class MfuFormStatusIndicatorComponent {
  protected readonly form = inject(FormGroupDirective);
}