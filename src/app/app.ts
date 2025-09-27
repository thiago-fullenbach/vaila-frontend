import { faArrowUpRightFromSquare, faCopy, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'vaila-root',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    FontAwesomeModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private formBuilder = inject(FormBuilder);
  urlForm = this.formBuilder.nonNullable.group({
    url: ['', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/)
    ]]
  })

  // TODO: Criar um tipo para essa lista
  // Dados mocados
  urls:any[] = [
    { hash: "1", shortUrl: "https://www.vai.la.com.br/1", originalUrl: "http://www.abcdefgh.com.br/hajsdasjdksahkj" },
    { hash: "2", shortUrl: "https://www.vai.la.com.br/2", originalUrl: "http://www.ijklmnop.com.br/7gn4uige78g44gg" },
    { hash: "3", shortUrl: "https://www.vai.la.com.br/3", originalUrl: "http://www.qrstuvwx.com.br/d172hdwiud781he" }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowUpRightFromSquare, faCopy, faTrash, faHeart);
  }

  onSubmit() {
    // TODO: Implementar envio
    if(this.urlForm.invalid) {
      console.log("Formulário inválido!!!")
      return;
    }
    console.log(this.urlForm.value)
  }
}
