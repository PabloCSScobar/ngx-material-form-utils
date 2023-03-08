import { AfterViewInit, Component, inject, OnDestroy } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { MatFormField, MatFormFieldControl } from "@angular/material/form-field";
import { Subject, takeUntil } from "rxjs";
import { ErrorMessageService } from "./error-message.service";

@Component({
  selector: "[mfuErrorMessage]",
  template: `{{ errorMessage }}`,
  standalone: true
})
export class ErrorMessageComponent implements AfterViewInit, OnDestroy {
  container = inject(MatFormField);
  errorMessageService = inject(ErrorMessageService);
  control!: MatFormFieldControl<any>;
  errorMessage: string | null = null;
  destroy$ = new Subject();

  updateErrorMessage(): string | null {
    this.errorMessage = this.errorMessageService.errorMessage(this.control.ngControl as unknown as AbstractControl);
    return this.errorMessage;

  }

  ngAfterViewInit(): void {
    this.control = this.container._control;
    this.control.stateChanges
      ?.pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}