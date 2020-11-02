import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class TinyUrlService {
  constructor(private _http: HttpClient) {}

  public tinyUrl(url: string) {
    return this._http
      .get(`https://tinyurl.com/api-create.php?url=${url}`)
      .pipe(catchError(error => of(error.error.text))); // then handle the error
  }
}
