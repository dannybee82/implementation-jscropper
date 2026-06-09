import { TestBed } from '@angular/core/testing';
import { CropBox } from './crop-box';
import { describe, beforeEach, it, expect } from 'vitest';

describe('CropBoxService', () => {
  let service: CropBox;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropBox);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});