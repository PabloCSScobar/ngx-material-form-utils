import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
onClick() {
  console.log('Clicked in the component');
}
onInput($event: Event) {
  console.log($event);
}
onFocus($event: FocusEvent) {
  console.log($event);
}
onBlur($event: FocusEvent) {
  console.log($event);
}

someSelectItems = [
  { value: '1', display: 'One' },
  { value: '2', display: 'Two' },
  { value: '3', display: 'Three' },
];

  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    email: [''],
    username: ['', Validators.required],
    description: ['', Validators.required],
    someSelect: [null, Validators.required],
  });
}
