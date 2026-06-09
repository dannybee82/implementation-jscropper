import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CropboxSettings } from './cropbox-settings';
import { describe, beforeEach, it, expect } from 'vitest';

describe('CropboxSettingsComponent', () => {
  let component: CropboxSettings;
  let fixture: ComponentFixture<CropboxSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropboxSettings]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropboxSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});