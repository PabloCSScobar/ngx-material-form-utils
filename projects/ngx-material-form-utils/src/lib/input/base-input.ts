import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { MatFormFieldAppearance } from "@angular/material/form-field";

@Directive()
export class MfuBaseInput {
  @Input() id!: string;
  @Input() name!: string;
  @Input() required = false;
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
}