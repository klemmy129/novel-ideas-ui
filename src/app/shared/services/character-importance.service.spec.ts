import { TestBed } from '@angular/core/testing';

import { CharacterImportanceService } from './character-importance.service';
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AppConfig } from "../../app.config";
import { CharacterImportanceDto } from "novel-ideas-api";

describe('CharacterImportanceService', () => {
  let service: CharacterImportanceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let appConfig: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterImportanceService,
        {provide: AppConfig, appConfig: AppConfig}
      ]
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    appConfig = TestBed.inject(AppConfig);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CharacterImportanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.getCharacterImportance1', () => {
    const testData: CharacterImportanceDto = {id: 1, importance: 'aaa', isDeleted: false};
    const testUrl: string = '/character-importance/1';

    // Make an HTTP GET request
    httpClient.get<CharacterImportanceDto>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/character-importance/1');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
