import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vaila-url-list-card',
  imports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './url-list-card.html'
})
export class UrlListCard implements AfterViewInit {
  displayedColumns: string[] = ['hash', 'url', 'actions'];
  dataSource = new MatTableDataSource<UrlListModel>(URLS);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowUpRightFromSquare, faCopy, faTrash);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(url);
  }

  deleteUrl(hash: string) {
    // TODO: Implement
    console.log(`Delete URL: ${hash}`)
  }
}

interface UrlListModel {
  hash: string,
  shortUrl: string,
  originalUrl: string
}

// Mock
const URLS:UrlListModel[] = [
  { hash: "1", shortUrl: "https://www.vai.la.com.br/1", originalUrl: "http://www.abcdefgh.com.br/hajsdasjdksahkj" },
  { hash: "2", shortUrl: "https://www.vai.la.com.br/2", originalUrl: "http://www.ijklmnop.com.br/7gn4uige78g44gg" },
  { hash: "3", shortUrl: "https://www.vai.la.com.br/3", originalUrl: "http://www.qrstuvwx.com.br/d172hdwiud781he" }
];
