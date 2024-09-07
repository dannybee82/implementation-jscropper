import { TestBed } from '@angular/core/testing';

import { CropBoxService } from './crop-box.service';

describe('CropBoxService', () => {
  let service: CropBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
