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
  }

  getParticularNews(newsId: number): Observable<any> {
    let headers = new HttpHeaders({});
    let params = new HttpParams({});
    let options = { headers: headers, params: params }
    return this.http.get(URL.API + this.PARTICULAR_NEWS + newsId, options);
  }


}
