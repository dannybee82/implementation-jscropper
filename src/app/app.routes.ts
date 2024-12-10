import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/components/cropper-page/cropper-page.component').then(c => c.CropperPageComponent),
    }
];