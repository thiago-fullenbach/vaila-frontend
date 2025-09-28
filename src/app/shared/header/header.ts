import { Component, Input } from '@angular/core';

@Component({
  selector: 'vaila-header',
  templateUrl: './header.html'
})
export class Header {
  @Input() app:string = 'vai.la'
}
