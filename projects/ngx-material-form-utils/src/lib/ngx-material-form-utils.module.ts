import { NgModule } from '@angular/core';
import { NgxMaterialFormUtilsComponent } from './ngx-material-form-utils.component';
import { ErrorMessageComponent } from './validation/error-message.component';



@NgModule({
  declarations: [
    NgxMaterialFormUtilsComponent
  ],
  imports: [
    ErrorMessageComponent
  ],
  exports: [
    NgxMaterialFormUtilsComponent,
    ErrorMessageComponent
  ]
})
export class NgxMaterialFormUtilsModule { }
