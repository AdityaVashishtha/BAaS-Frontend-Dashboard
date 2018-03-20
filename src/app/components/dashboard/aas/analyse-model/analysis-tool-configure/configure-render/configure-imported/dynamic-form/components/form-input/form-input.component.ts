import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <div class="row">
        <div class="col-md-8">
          <label>{{ config.label }}</label>
        </div>
        <div class="col-md-4 form-group">
          <input
          type="text" class="form-control"
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name" />
        </div>
      </div>
   
    </div>
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;
}