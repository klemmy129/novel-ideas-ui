import { Injectable } from '@angular/core';
import { AppConfig } from "../../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharacterImportanceDto } from "novel-ideas-api";

@Injectable({
  providedIn: 'root'
})
export class CharacterImportanceService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  getAllCharacterImportance(): Observable<CharacterImportanceDto[]> {
    return this.http.get<CharacterImportanceDto[]>('${this.appConfig.novelIdeasUrl}/character-importance/',  { observe: 'body', responseType: 'json' });
  }

  getCharacterImportance(id: number): Observable<CharacterImportanceDto> {
    return this.http.get<CharacterImportanceDto>('${this.appConfig.novelIdeasUrl}/character-importance/${id}', { observe: 'body', responseType: 'json' });
  }

  postCharacterImportance(importance: CharacterImportanceDto): Observable<CharacterImportanceDto> {
    return this.http.post<CharacterImportanceDto>('${this.appConfig.novelIdeasUrl}/character-importance/', importance,{ observe: 'body', responseType: 'json' });
  }
}
