import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  template: `
    <div 
      class="dynamic-field form-button btn btn-primary form-control"
      [formGroup]="group">
      <button type="submit">
        {{ config.label }}
      </button>
    </div>
  `,
})
export class FormButtonComponent  {
  config;
  group: FormGroup;
}