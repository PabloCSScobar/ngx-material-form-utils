import { Directive, EventEmitter, HostListener, inject, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActionConfirmDialogComponent } from "./confirm-dialog.component";

@Directive({
  selector: "[mfuClickConfirm]"
})
export class MfuClickConfirmDirective {  
  public matDialog = inject(MatDialog);

  @Output() confirmedClick = new EventEmitter<Event>();
  @Input() confirmMessage: string = "Are you sure?";

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (confirm(this.confirmMessage)) {
      this.confirmedClick.emit(event);
    }
  }

    openDialog(event: Event) {
    const dialogRef = this.matDialog.open(ActionConfirmDialogComponent,
      { 
        width: '250px',
        data: { message: this.confirmMessage }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmedClick.emit(event);
      }
    });
  }
}