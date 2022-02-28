import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDto } from 'novel-ideas-api';
import { Page } from "../models/page";
import { AppConfig } from "../../app.config";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  getBooks(): Observable<Page<BookDto>> {
    return this.http.get<Page<BookDto>>('${this.appConfig.novelIdeasUrl}/book/', { observe: 'body', responseType: 'json' });
  }
  getBook(id: number): Observable<BookDto> {
    return this.http.get<BookDto>('${this.appConfig.novelIdeasUrl}/book/${id}', { observe: 'body', responseType: 'json' });
  }
}
