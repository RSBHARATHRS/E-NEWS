import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from '../models/news.model';
import { URL } from "../constants/api-urls"

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  ALL_FEEDS: string = "/E-News/news-feeds";
  PARTICULAR_NEWS: string = "/E-News/news-feeds/";

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    let headers = new HttpHeaders({});
    let params = new HttpParams({});
    let options = { headers: headers, params: params }
    return this.http.get(URL.API + this.ALL_FEEDS, options);
    return of([
      {
        newsId: 1,
        heading: "Mask Mandates Are Ending—but Should You Still Wear One?",
        content: "The CDC still recommends masking—but mask mandates are ending in many states. Here's what doctors have to say about who should still wear a mask.",
        imgUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F02%2F16%2Fmask-mandate-2000.jpg&w=426&h=285&c=sc&poi=%5B940%2C780%5D&q=60",
        category: "social",
      },
      {
        newsId: 2,
        heading: "Genetically Modified Foods (GMOs) Are Getting a Brand New Label",
        content: "Food manufacturers have to put 'bioengineered' on the label of their genetically altered foods—or just a confusing QR code.",
        imgUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F01%2F10%2Fgmo-vs-Bioengineered-foods-2000.jpg&w=426&h=285&c=sc&poi=%5B940%2C705%5D&q=60",
        category: "",
      },

    ])
  }

  getParticularNews(newsId: number): Observable<any> {
    let headers = new HttpHeaders({});
    let params = new HttpParams({});
    let options = { headers: headers, params: params }
    return this.http.get(URL.API + this.PARTICULAR_NEWS + newsId, options);
    return of(
      {
        newsId: 2,
        heading: "Genetically Modified Foods (GMOs) Are Getting a Brand New Label",
        content: "Food manufacturers have to put 'bioengineered' on the label of their genetically altered foods—or just a confusing QR code.",
        imgUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F01%2F10%2Fgmo-vs-Bioengineered-foods-2000.jpg&w=426&h=285&c=sc&poi=%5B940%2C705%5D&q=60",
        category: "",
      }
    )
  }


}
