import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiVerbUtils } from '../helpers/apiVerbUtils';
import { Api } from '../models/apis';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public send(api: Api, urlParams?: any, body?: any): Observable<any> {
    let url = ApiVerbUtils.Get(api);

    if (urlParams != null) {
      if (Array.isArray(urlParams)) {
        urlParams.forEach((element) => {
          url = this.format(url, element);
        });
      } else {
        url = this.format(url, urlParams);
      }
    }

    return this.httpClient.get(url);
  }

  // Replaces all placeholders '{var}' in url by value from params with key `var`
  private format(urlWithParameters: string, params: any): string {
    for (let param in params) {
      if (params.hasOwnProperty(param)) {
        urlWithParameters = urlWithParameters.replace(
          '{' + param + '}',
          params[param]
        );
      }
    }
    return urlWithParameters;
  }
}
