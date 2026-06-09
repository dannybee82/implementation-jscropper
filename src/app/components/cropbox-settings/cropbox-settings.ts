import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { AllMatModules } from '../../all-mat-modules.module';
import { CropBox } from '../../services/crop-box';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cropbox-settings',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AllMatModules,
    MatInputModule
  ],
  templateUrl: './cropbox-settings.html',
  styleUrl: './cropbox-settings.scss'
})
export class CropboxSettings implements OnInit {

  protected form: UntypedFormGroup = new FormGroup({});

  private fb = inject(FormBuilder);
  private cropBoxService = inject(CropBox);

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