import { Component } from '@angular/core';

import { Header } from './shared/header/header';
import { UrlFormCard } from './feature/url-form-card/url-form-card';
import { UrlListCard } from "./feature/url-list-card/url-list-card";
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'vaila-root',
  imports: [
    Header,
    UrlFormCard,
    UrlListCard,
    Footer,
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
