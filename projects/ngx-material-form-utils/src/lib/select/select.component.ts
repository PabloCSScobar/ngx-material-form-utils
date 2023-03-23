import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, SkipSelf, ViewChild } from "@angular/core";
import { ControlContainer, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelect, MatSelectChange, MatSelectModule } from "@angular/material/select";
import { MfuBaseInput } from "../input/base-input";
import { MfuErrorMessage } from "../validation/error-message.component";

@Component({
  selector: "mfu-select",
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MfuErrorMessage, NgIf, NgFor],
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
      <mat-select
      [(value)]="selected"
      [formControlName]="controlName"
      [required]="required"
      [multiple]="multiple" 
      [id]="id"
      (closed)="closed.emit($event)"
      (opened)="opened.emit($event)"
      (selectionChange)="selectionChange.emit($event)"
      (valueChange)="valueChange.emit($event)"
      (focus)="focus.emit($event)"
      (blur)="blur.emit($event)"
      >
      <mat-option *ngFor="let item of items" [value]="item.value">
        {{item.display}}
      </mat-option>
    </mat-select>
      <mat-error *ngIf="showErrors" mfuErrorMessage/>
    </mat-form-field>
  `
})
export class MfuSelectComponent extends MfuBaseInput {
  @Input() items!: { value: any; display: string }[];
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() selected: any = null;

  @Output() selectionChange = new EventEmitter<MatSelectChange>();
  @Output() valueChange = new EventEmitter<any>();
  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();

  @ViewChild(MatSelect) matSelect!: MatSelect;
}