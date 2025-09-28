import { inject, Injectable } from '@angular/core';
import { UrlDTO, UrlService } from './url-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceImpl implements UrlService {
  readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  readUrls(page: number = 0, size: number = 10): Observable<UrlDTO[]> {
    return this.http.get<UrlDTO[]>(`${this.apiUrl}/url?page=${page}&size=${size}`);
  }

  createUrl(url: string): Observable<UrlDTO> {
    return this.http.post<UrlDTO>(`${this.apiUrl}/url`, { "originalUrl": url });
  }

  deleteUrl(hash: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/url/${hash}`);
  }
}
