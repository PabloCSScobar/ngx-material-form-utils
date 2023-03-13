import { NgModule } from '@angular/core';
import { NgxMaterialFormUtilsComponent } from './ngx-material-form-utils.component';
import { MfuErrorMessageComponent } from './validation/error-message.component';



@NgModule({
  declarations: [
    NgxMaterialFormUtilsComponent
  ],
  imports: [
    MfuErrorMessageComponent
  ],
  exports: [
    NgxMaterialFormUtilsComponent,
    MfuErrorMessageComponent
  ]
})
export class NgxMaterialFormUtilsModule { }
