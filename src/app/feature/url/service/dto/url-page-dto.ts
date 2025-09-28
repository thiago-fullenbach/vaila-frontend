import { UrlDTO } from "./url-dto";

export interface UrlPageDTO {
  urls: UrlDTO[],
  page: number,
  totalPages: number,
  totalUrls: number
}
