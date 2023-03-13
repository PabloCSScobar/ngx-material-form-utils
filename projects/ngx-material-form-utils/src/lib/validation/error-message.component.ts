import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, inject, OnDestroy } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { MatFormField, MatFormFieldControl } from "@angular/material/form-field";
import { Subject, takeUntil } from "rxjs";
import { ErrorMessageService } from "./error-message.service";

@Component({
  selector: "[mfuErrorMessage]",
  template: `{{ errorMessage }}`,
  standalone: true
})
export class MfuErrorMessageComponent implements AfterViewChecked, OnDestroy {
  container = inject(MatFormField);
  errorMessageService = inject(ErrorMessageService);
  control!: MatFormFieldControl<any>;
  errorMessage: string | null = null;
  destroy$ = new Subject();
  subscribed = false;

  updateErrorMessage(): string | null {
    this.errorMessage = this.errorMessageService.errorMessage(this.control.ngControl?.control);
    return this.errorMessage;

  }

  ngAfterViewChecked(): void {
    this.control = this.container._control;
    if(this.control && !this.subscribed) {
      this.subscribed = true;
      this.control.stateChanges.pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.updateErrorMessage());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}