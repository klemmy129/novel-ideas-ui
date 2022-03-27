import { Injectable } from '@angular/core';
import { AppConfig } from "../../app.config";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { CharacterGenderDto } from "novel-ideas-api";

@Injectable({
  providedIn: 'root'
})
export class CharacterGenderService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  getAllGender(): Observable<CharacterGenderDto[]> {
    return this.http.get<CharacterGenderDto[]>('${this.appConfig.novelIdeasUrl}/gender/', {
      observe: 'body',
      responseType: 'json'
    });
  }

  getGender(id: number): Observable<CharacterGenderDto> {
    return this.http.get<CharacterGenderDto>('${this.appConfig.novelIdeasUrl}/gender/${id}', {
      observe: 'body',
      responseType: 'json'
    });
  }

  postGender(gender: CharacterGenderDto): Observable<CharacterGenderDto> {
    return this.http.post<CharacterGenderDto>('${this.appConfig.novelIdeasUrl}/gender-importance/', gender, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
