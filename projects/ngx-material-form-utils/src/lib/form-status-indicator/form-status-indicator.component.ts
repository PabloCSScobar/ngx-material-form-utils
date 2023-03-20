import { trigger, state, style, transition, animate } from "@angular/animations";
import { NgIf } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: "mfu-form-status-indicator",
  imports: [NgIf],
  animations: [
    trigger('slideIn', [
      state('void, false', style({ transform: 'translateX(-100%)' })),
      state('true', style({ transform: 'translateX(0%)' })),
      transition('void => true, false => true', [
        animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
    trigger('slideOut', [
      state('void, false', style({ transform: 'translateX(0)' })),
      state('true', style({ transform: 'translateX(100%)' })),
      transition('true => void, true => false', [
        animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
  template: `<div class="status-wrapper">
    <div 
    *ngIf="form.form.invalid && form.form.touched"
    class="form-status invalid"
    [@slideIn]="showAnimation ? 'void => true' : 'true => void'"
    [@slideOut]="showAnimation ? 'void => true' : 'true => void'"
    ></div>
    <div
    *ngIf="form.form.valid && form.form.touched"
    class="form-status valid"
    [@slideIn]="showAnimation ? 'void => true' : 'true => void'"
    [@slideOut]="showAnimation ? 'void => true' : 'true => void'"
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
  @Input() showAnimation = false; 
  protected readonly form = inject(FormGroupDirective);
}