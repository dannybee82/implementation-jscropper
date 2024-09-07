import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { AllMatModules } from '../../all-mat-modules.module';
import { CropBoxService } from '../../services/crop-box.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cropbox-settings',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AllMatModules,
    MatInputModule
  ],
  templateUrl: './cropbox-settings.component.html',
  styleUrl: './cropbox-settings.component.scss'
})
export class CropboxSettingsComponent implements OnInit {

  form: UntypedFormGroup = new FormGroup({});

  private fb = inject(FormBuilder);
  private cropBoxService = inject(CropBoxService);

  ngOnInit(): void {
    this.form = this.fb.group({
      minimumSize: [150],
      maximumSize: [500]
    });

    this.form.controls['minimumSize'].valueChanges.subscribe((value: number) => {
      this.cropBoxService.minimumSize = value;
    });

    this.form.controls['maximumSize'].valueChanges.subscribe((value: number) => {
      this.cropBoxService.maximumSize = value;
    });
  }

}