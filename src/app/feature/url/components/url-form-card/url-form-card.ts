import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UrlFormModel } from '../../model/url-form-model';

@Component({
  selector: 'vaila-url-form-card',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './url-form-card.html',
})
export class UrlFormCard {
  readonly urlPattern = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
  urlForm: FormGroup<UrlFormModel>;

  constructor(fb: FormBuilder) {
    this.urlForm = fb.group<UrlFormModel>({
      url: fb.control('', { nonNullable:true, validators: [Validators.required, Validators.pattern(this.urlPattern)] })
    })
  }

  onSubmit() {
    // TODO: Implement
    console.log(this.urlForm.value.url)
  }
}
