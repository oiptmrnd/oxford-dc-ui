import { Injectable } from '@angular/core';
import { UrlManagerService } from "../url-manager/url-manager.service";
import { HttpService } from "../http/http.service";
import { HttpRequestOptions } from "../../models/http-request.options";

import { HttpRequestParamsOptions } from "../../models/http-request-params.options";

@Injectable({
  providedIn: "root"
})
export class DictionaryService {
  constructor(
    private urlManager: UrlManagerService,
    private http: HttpService
  ) {}

  public searchDefinition(word: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: HttpRequestParamsOptions = {
        host: this.urlManager.getDefinition(),
        headers: {
          "Content-Type": "application/json"
        },
        qs: { word: word }
      };
      this.http.get(options).subscribe(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  public searchSynonyms(word: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: HttpRequestParamsOptions = {
        host: this.urlManager.getSynonyms(),
        headers: {
          "Content-Type": "application/json"
        },
        qs: { word: word }
      };
      this.http.get(options).subscribe(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  public searchTranslation(word: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: HttpRequestParamsOptions = {
        host: this.urlManager.getTranslation(),
        headers: {
          "Content-Type": "application/json"
        },
        qs: { word: word }
      };
      this.http.get(options).subscribe(
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }


}
