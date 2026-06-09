import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CropperPage } from './cropper-page';
import { describe, beforeEach, it, expect } from 'vitest';

describe('CropperPageComponent', () => {
  let component: CropperPage;
  let fixture: ComponentFixture<CropperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropperPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});