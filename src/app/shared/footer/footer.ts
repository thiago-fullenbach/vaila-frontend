import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vaila-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html'
})
export class Footer {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHeart);
  }
}
