import { faArrowUpRightFromSquare, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Header } from './shared/header/header';
import { UrlFormCard } from './feature/url-form-card/url-form-card';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'vaila-root',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    FontAwesomeModule,
    Header,
    UrlFormCard,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // TODO: Criar um tipo para essa lista
  // Dados mocados
  urls:any[] = [
    { hash: "1", shortUrl: "https://www.vai.la.com.br/1", originalUrl: "http://www.abcdefgh.com.br/hajsdasjdksahkj" },
    { hash: "2", shortUrl: "https://www.vai.la.com.br/2", originalUrl: "http://www.ijklmnop.com.br/7gn4uige78g44gg" },
    { hash: "3", shortUrl: "https://www.vai.la.com.br/3", originalUrl: "http://www.qrstuvwx.com.br/d172hdwiud781he" }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowUpRightFromSquare, faCopy, faTrash);
  }
}
