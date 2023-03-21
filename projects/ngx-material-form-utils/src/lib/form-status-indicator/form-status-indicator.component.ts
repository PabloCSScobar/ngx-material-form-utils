import { trigger, state, style, transition, animate } from "@angular/animations";
import { NgIf, NgStyle } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: "mfu-form-status-indicator",
  imports: [NgIf, NgStyle],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('slideOut', [
      state('void', style({ transform: 'translateX(0)' })),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  template: `<div class="status-wrapper" [style.height.px]="statusHeight" [@.disabled]="!showAnimation"
  >
    <div 
    [style.height.px]="statusHeight"
    *ngIf="isFormInvalid"
    class="form-status"
    [ngStyle]="{ 'background-color': invalidColor }"
    [@slideIn]
    [@slideOut]
    ></div>
    <div
    [style.height.px]="statusHeight"
    *ngIf="isFormValid"
    class="form-status"
    [ngStyle]="{ 'background-color': validColor }"
    [@slideIn]
    [@slideOut]
    ></div>
  </div>`,
  styles: [`
  .status-wrapper {
    overflow: hidden;
    min-height: 5px;
    width: 100%;
    position: relative;
  }
  .form-status {
    position: absolute;
    height: 5px;
    width: 100%;
  }
  /* .invalid {
    background-color: red;
  }
  .valid {
    background-color: green;
  } */
  `],
  standalone: true
})
export class MfuFormStatusIndicatorComponent {
  @Input() showAnimation = true; 
  @Input() statusHeight = 5;
  @Input() validColor = 'green';
  @Input() invalidColor = 'red';
  protected readonly form = inject(FormGroupDirective);


  get isFormInvalid() {
    const controls = Object.values(this.form.form.controls);
    const hasInvalidTouchedControl = controls.some(control => control.invalid && control.touched);
    return this.form.form.invalid && hasInvalidTouchedControl;
  }

  get isFormValid() {
    return this.form.form.valid;
  }
}