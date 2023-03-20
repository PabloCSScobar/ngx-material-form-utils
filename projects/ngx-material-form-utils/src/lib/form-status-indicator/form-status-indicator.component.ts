import { trigger, state, style, transition, animate } from "@angular/animations";
import { NgIf } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: "mfu-form-status-indicator",
  imports: [NgIf],
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
    *ngIf="form.form.invalid && form.form.touched"
    class="form-status invalid"
    [@slideIn]
    [@slideOut]
    ></div>
    <div
    [style.height.px]="statusHeight"
    *ngIf="form.form.valid && form.form.touched"
    class="form-status valid"
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
  .invalid {
    background-color: red;
  }
  .valid {
    background-color: green;
  }
  `],
  standalone: true
})
export class MfuFormStatusIndicatorComponent {
  @Input() showAnimation = true; 
  @Input() statusHeight = 5;
  protected readonly form = inject(FormGroupDirective);
}