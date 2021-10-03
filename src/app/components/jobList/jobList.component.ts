import { Component, OnInit } from '@angular/core';
import { IPage, JobListing, PositionFunction } from '../../models/models';
import { JobListService } from '../../services/jobList.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './jobList.component.html',
  styleUrls: ['./jobList.component.css'],
})
export class JobListComponent implements OnInit {
  constructor(public jobListService: JobListService) {}

  howManyPages: number = 5;
  pagesDisplay: string = '5';
  jobs?: IPage<any>;
  jobListings?: JobListing[];
  positionFunctionFilters?: PositionFunction[] = [];
  positionFunctionId: string = '&position_functions=';

  setPages(pages: number, display: string) {
    this.howManyPages = pages;
    this.pagesDisplay = display;
  }

  async getJobs() {
    this.jobs = await this.jobListService
      .getJobs(this.howManyPages, this.positionFunctionId.slice(0, -1))
      .then();
    this.jobListings = this.jobs?.results;
  }

  async getPositions() {
    this.positionFunctionFilters = await this.jobListService
      .getPositions()
      .then();
  }

  async getPositionId(positionId: string) {
    this.positionFunctionId = this.positionFunctionId + positionId + ',';
    await this.getJobs().then();
  }

  ngOnInit(): void {
    this.getJobs().then();
    this.getPositions().then();
  }
}
