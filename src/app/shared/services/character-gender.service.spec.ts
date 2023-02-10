import { TestBed } from '@angular/core/testing';
import { CharacterGenderService } from './character-gender.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CharacterGenderDto } from "novel-ideas-api";
import { AppConfig } from "../../app.config";

describe('CharacterGenderService', () => {
  let service: CharacterGenderService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let appConfig: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterGenderService,
        {provide: AppConfig, appConfig: AppConfig}
      ]
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    appConfig = TestBed.inject(AppConfig);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CharacterGenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.getGender1', () => {
    const testData: CharacterGenderDto = {id: 1, gender: 'aaa', isDeleted: false};
    const testUrl: string = '/gender/1';

    // Make an HTTP GET request
    httpClient.get<CharacterGenderDto>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/gender/1');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can test HttpClient.postGender', () => {
    const testData: CharacterGenderDto = {id: 1, gender: 'aaa', isDeleted: false};
    const testUrl: string = '/gender';

    // Make an HTTP POST request
    httpClient.post<CharacterGenderDto>(testUrl, testData)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/gender');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('POST');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });


  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
    const testUrl: string = '/gender/666';

    httpClient.get<CharacterGenderDto>(testUrl).subscribe({
      next: () => fail('should have failed with the 404 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(404);
        expect(error.error).withContext('message').toEqual(emsg);
      },
    });

    const req = httpTestingController.expectOne(testUrl);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
