import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPage, PositionFunction } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class JobListService {
  constructor(private http: HttpClient) {}

  async getPositions(): Promise<any> {
    let url: string =
      'https://test-api.mojob.io/public/job/position-functions/?page_size=9999';
    const jobLocationFiltersResponsePage: IPage<PositionFunction> =
      await this.http.get(url).toPromise();
    return jobLocationFiltersResponsePage.results;
  }

  async getJobs(
    howManyPages?: number,
    positionFunction?: string
  ): Promise<any> {
    let url: string =
      'https://test-api.mojob.io/public/job/listings/?include_open=False&page=1&page_size=' +
      howManyPages +
      positionFunction +
      '&use_mojob_feed_filter=True&use_pagination=True';
    return await this.http.get(url).toPromise();
  }
}
