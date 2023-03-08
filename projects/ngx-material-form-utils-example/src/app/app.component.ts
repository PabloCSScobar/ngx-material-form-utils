import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly fb = inject(FormBuilder);
  exampleForm = this.fb.group({
    email: [''],
    username: ['', Validators.required]
  });
}
