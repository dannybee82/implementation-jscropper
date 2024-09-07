import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropboxSettingsComponent } from './cropbox-settings.component';

describe('CropboxSettingsComponent', () => {
  let component: CropboxSettingsComponent;
  let fixture: ComponentFixture<CropboxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropboxSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropboxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});