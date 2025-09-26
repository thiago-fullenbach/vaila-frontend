import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'vaila-root',
  imports: [ReactiveFormsModule],
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

  accessUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
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
