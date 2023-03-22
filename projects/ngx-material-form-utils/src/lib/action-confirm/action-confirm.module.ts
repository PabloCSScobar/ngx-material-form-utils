import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MfuClickConfirmDirective } from "./click-confirm.directive";
import { ActionConfirmDialogComponent } from "./confirm-dialog.component";
import { MfuSubmitConfirmDirective } from "./submit-confirm.directive";

@NgModule({
  declarations: [
    MfuClickConfirmDirective,
    MfuSubmitConfirmDirective,
    ActionConfirmDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MfuClickConfirmDirective,
    MfuSubmitConfirmDirective
  ],
})
export class MfuActionConfirmModule { }