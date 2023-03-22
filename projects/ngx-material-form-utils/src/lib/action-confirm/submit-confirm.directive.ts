import { Directive, EventEmitter, HostListener, inject, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActionConfirmDialogComponent } from "./confirm-dialog.component";

@Directive({
  selector: "[mfuSubmitConfirm]"
})
export class MfuSubmitConfirmDirective {
  public matDialog = inject(MatDialog);

  @Output() confirmedSubmit = new EventEmitter<Event>();
  @Input() confirmMessage: string = "Are you sure you want to submit the form?";

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    this.openDialog(event);
  }

  openDialog(event: Event) {
    const dialogRef = this.matDialog.open(ActionConfirmDialogComponent,
      { 
        width: '250px',
        data: { message: this.confirmMessage }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmedSubmit.emit(event);
      }
    });
  }
}