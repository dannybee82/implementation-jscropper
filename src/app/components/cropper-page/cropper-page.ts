import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { OpenFile } from '../open-file/open-file';
import { ImageCropper } from '../image-cropper/image-cropper';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AllMatModules } from '../../all-mat-modules.module';
import { CropboxSettings } from '../cropbox-settings/cropbox-settings';

@Component({
  selector: 'app-cropper-page',
  imports: [
    OpenFile,
    CropboxSettings,
    AllMatModules
  ],
  templateUrl: './cropper-page.html',
  styleUrl: './cropper-page.scss'
})
export class CropperPage implements OnInit {

  protected previewImageData: WritableSignal<string> = signal('');

  public dialog = inject(MatDialog);

  ngOnInit(): void {}

  getFile(file: File): void {
    if(file) {
      const _file = URL.createObjectURL(file);

      this.openAvatarEditor(_file).subscribe((result: string) => {
        if (result) {
          console.log(result);
          this.loadImagePreview(result);
        }
      });
    }
  }

  openAvatarEditor(image: string): Observable<string> {
    const dialogRef = this.dialog.open(ImageCropper, {
      width: '800px',  
      height: '750px',
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