import { Component, Inject, inject } from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

type ConfirmDialogData = { message: string };

@Component({
  selector: 'dialog-animations-example-dialog',
  template: `
<div mat-dialog-content>
 {{data.message}}
</div>
<div mat-dialog-actions class="dialog-actions">
  <button mat-button [mat-dialog-close]="false">No</button>
  <button mat-button color="primary" [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
</div>  
  `,
  styles: [`
    .dialog-actions {
      display: flex;
      gap: 1rem;
    }
  `],
})
export class ActionConfirmDialogComponent {
  public readonly dialogRef = inject(MatDialogRef<ActionConfirmDialogComponent>);
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}
}