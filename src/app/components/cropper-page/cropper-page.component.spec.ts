import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperPageComponent } from './cropper-page.component';

describe('CropperPageComponent', () => {
  let component: CropperPageComponent;
  let fixture: ComponentFixture<CropperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropperPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CropperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});