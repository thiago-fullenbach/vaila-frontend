import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { UrlFormModel } from '../../model/url-form-model';
import { UrlDTO, UrlService } from '../../service/url-service';
import { UrlServiceImpl } from '../../service/url-service-impl';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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

  private urlService: UrlService = inject(UrlServiceImpl);
  private snackbar: MatSnackBar = inject(MatSnackBar);

  outputUrl = signal<string>('');
  isLoading = signal<boolean>(false);

  urlForm: FormGroup<UrlFormModel>;

  constructor(fb: FormBuilder, library: FaIconLibrary) {
    this.urlForm = fb.group<UrlFormModel>({
      url: fb.control('', { nonNullable:true, validators: [Validators.required, Validators.pattern(this.urlPattern)] })
    })
    library.addIcons(faArrowUpRightFromSquare);
  }

  onSubmit() {
    let url: string = this.urlForm.value.url!;
    this.isLoading.update(c => !c);
    this.urlService.createUrl(url).subscribe({
      next: (urlDTO: UrlDTO) => {
        this.isLoading.update(c => !c);
        this.outputUrl.update(() => urlDTO.shortUrl)
        this.snackbar.open("URL encurtada", '', {
          duration: this.snackbarDuration
        })
      },
      error: (err) => {
        this.isLoading.update(c => !c);
        console.error(`Erro ao salvar URL: ${err}`);
      }
    });
  }
}
