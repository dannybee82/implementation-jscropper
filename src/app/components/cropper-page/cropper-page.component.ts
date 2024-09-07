import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { OpenFileComponent } from '../open-file/open-file.component';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AllMatModules } from '../../all-mat-modules.module';
import { CropboxSettingsComponent } from '../cropbox-settings/cropbox-settings.component';

@Component({
  selector: 'app-cropper-page',
  standalone: true,
  imports: [
    OpenFileComponent,
    ImageCropperComponent,
    CropboxSettingsComponent,
    AllMatModules
  ],
  templateUrl: './cropper-page.component.html',
  styleUrl: './cropper-page.component.scss'
})
export class CropperPageComponent implements OnInit {

  previewImageData: WritableSignal<string> = signal('');

  public dialog = inject(MatDialog);

  ngOnInit(): void {}

  getFile(file: File): void {
    if(file) {
      const _file = URL.createObjectURL(file);

      this.openAvatarEditor(_file).subscribe((result: string) => {
        if (result) {
          this.loadImagePreview(result);
        }
      });
    }
  }

  openAvatarEditor(image: string): Observable<string> {
    const dialogRef = this.dialog.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }

  removeImage(): void {
    this.previewImageData.set('');
  }  

  private loadImagePreview(base64string: string): void {
    this.previewImageData.set(base64string);
  }

}