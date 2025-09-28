import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { UrlPageDTO } from './dto/url-page-dto';
import { UrlDTO } from './dto/url-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  readonly apiUrl = environment.apiUrl;

  private _listUpdateEvent = new Subject<void>();
  listUpdateEvent = this._listUpdateEvent.asObservable;

  constructor(private http: HttpClient) {}

  triggerListUpdateEvent() {
    this._listUpdateEvent.next();
  }

  readUrls(page: number, size: number): Observable<UrlPageDTO> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<UrlPageDTO>(`${this.apiUrl}/url`, { params });
  }

  createUrl(url: string): Observable<UrlDTO> {
    return this.http.post<UrlDTO>(`${this.apiUrl}/url`, { "originalUrl": url });
  }

  deleteUrl(hash: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/url/${hash}`);
  }
}
