import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/cropper-page/cropper-page').then(c => c.CropperPage),
    }
];