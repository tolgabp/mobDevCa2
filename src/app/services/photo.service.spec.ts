import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuring the testing module
    service = TestBed.inject(PhotoService); // Injecting the PhotoService
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifying if the service is created
  });
});