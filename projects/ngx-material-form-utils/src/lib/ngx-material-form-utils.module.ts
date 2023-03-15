import { NgModule } from '@angular/core';
import { NgxMaterialFormUtilsComponent } from './ngx-material-form-utils.component';
import { MfuErrorMessage } from './validation/error-message.component';



@NgModule({
  declarations: [
    NgxMaterialFormUtilsComponent
  ],
  imports: [
    MfuErrorMessage
  ],
  exports: [
    NgxMaterialFormUtilsComponent,
    MfuErrorMessage
  ]
})
export class NgxMaterialFormUtilsModule { }
