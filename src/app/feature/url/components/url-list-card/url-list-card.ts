import { AfterViewInit, Component, inject, OnInit, signal, ViewChild } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UrlService } from '../../service/url-service';
import { UrlDTO } from '../../service/dto/url-dto';

@Component({
  selector: 'vaila-url-list-card',
  imports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
  ],
  templateUrl: './url-list-card.html'
})
export class UrlListCard implements OnInit, AfterViewInit {
  readonly displayedColumns: string[] = ['hash', 'url', 'actions'];

  totalUrls: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  urlService: UrlService = inject(UrlService);
  dataSource = new MatTableDataSource<UrlDTO>();
  loading = signal<boolean>(false);

  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowUpRightFromSquare, faCopy, faTrash);
  }

  ngOnInit(): void {
    this.loadUrls(this.pageIndex, this.pageSize);
  }

  ngAfterViewInit(): void {
    this._paginator.page.subscribe(event => {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadUrls(event.pageIndex, event.pageSize);
    })

    this.urlService.listUpdateEvent().subscribe(() => {
      this.loadUrls(this.pageIndex, this.pageSize);
    })
  }

  loadUrls(page: number = 0, size: number = 10) {
    this.loading.set(true);
    this.urlService.readUrls(page, size).subscribe(urlPageDTO => {
      this.dataSource.data = urlPageDTO.urls;
      this.totalUrls = urlPageDTO.totalUrls;
      this.pageIndex = page;
      this.pageSize = size;
      this.loading.set(false);
    })
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(url);
  }

  deleteUrl(hash: string) {
    this.loading.set(true);
    this.urlService.deleteUrl(hash).subscribe(() => {
      this.urlService.triggerListUpdateEvent();
      this.loading.set(false);
    });
  }
}
