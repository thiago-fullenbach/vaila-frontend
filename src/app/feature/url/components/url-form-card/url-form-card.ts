import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { UrlService } from '../../service/url-service';

@Component({
  selector: 'vaila-url-form-card',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  templateUrl: './url-form-card.html',
})
export class UrlFormCard {
  readonly snackbarDuration = 5000;
  readonly urlPattern = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

  loading = signal<boolean>(false);
  outputUrl = signal<string>('');

  private urlService: UrlService = inject(UrlService);
  private snackbar: MatSnackBar = inject(MatSnackBar);

  urlForm: FormGroup<any>;

  constructor(fb: FormBuilder, library: FaIconLibrary) {
    this.urlForm = fb.group({
      url: fb.control<string>('', { nonNullable:true, validators: [Validators.required, Validators.pattern(this.urlPattern)] })
    })
    library.addIcons(faArrowUpRightFromSquare);
  }

  onSubmit() {
    this.loading.set(true);
    let url: string = this.urlForm.value.url!;
    this.urlService.createUrl(url).subscribe(url => {
      this.outputUrl.set(url.shortUrl);
      this.urlService.triggerListUpdateEvent();
      this.loading.set(false);
      this.snackbar.open('URL salva', '', {
        duration: 3000
      })
    });
  }
}
