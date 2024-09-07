import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CropBoxService {

  minimumSize: number = 150;
  maximumSize: number = 500;

}