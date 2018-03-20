import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[OnlyNumber]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: OnlyNumber, multi: true }
  ]
})
export class OnlyNumber {

  
  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;

  validate(c: FormControl): ValidationErrors | null {
  // Here we call our static validator function 
  return OnlyNumber.validateNumber(c);
  }

    static validateNumber(control: FormControl): ValidationErrors | null {
      if(isNaN(control.value)){
        return {numberError:"Input must be a number"};
      }
      return null;
  }


}