import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class UrlManagerService {
  constructor() {}

  public getDefinition(): string {
    return `${environment.API_HOST}/oxford/api/dictionary/search`;
  }

  public getSynonyms(): string {
    return `${environment.API_HOST}/oxford/api/dictionary/synonyms`;
  }
  public getTranslation(): string {
    return `${environment.API_HOST}/oxford/api/dictionary/translate`;
  }
}
