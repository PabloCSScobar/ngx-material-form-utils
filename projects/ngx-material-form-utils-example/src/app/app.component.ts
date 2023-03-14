import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
onInput($event: Event) {
  console.log($event);
}
onFocus($event: FocusEvent) {
  console.log($event);
}
onBlur($event: FocusEvent) {
  console.log($event);
}
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    email: [''],
    username: ['', Validators.required]
  });
}
