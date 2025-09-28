import { Observable } from "rxjs"

export interface UrlDTO {
  hash: string,
  shortUrl: string,
  originalUrl: string
}

export interface UrlService {
  readUrls(page: number, size: number): Observable<UrlDTO[]>,
  createUrl(url: string): Observable<UrlDTO>,
  deleteUrl(hash: string): Observable<void>
}
