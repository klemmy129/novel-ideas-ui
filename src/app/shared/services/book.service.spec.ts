import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AppConfig } from "../../app.config";
import { BookDto } from "novel-ideas-api";

describe('BookService', () => {
  let service: BookService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let appConfig: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService,
        {provide: AppConfig, appConfig: AppConfig}
      ]
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    appConfig = TestBed.inject(AppConfig);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.getBook1', () => {
    const testData: BookDto = {
      id: 1,
      name: 'aaa',
      description: 'aaa bbb',
      startDate: new Date('2022-02-09T08:42:49'),
      state: "ACTIVE",
      characterProfiles: []
    };
    const testUrl: string = '/book/1';

    // Make an HTTP GET request
    httpClient.get<BookDto>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/book/1');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
