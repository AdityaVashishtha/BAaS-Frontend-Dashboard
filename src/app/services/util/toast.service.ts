import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

@Injectable()
export class ToastService {

  constructor(private toasterService: ToasterService) {
    
   }

   config: ToasterConfig;

   position = 'toast-top-right';
   animationType = 'fade';
   title = 'HI there!';
   content = `I'm cool toaster!`;
   timeout = 5000;
   toastsLimit = 5;
   type = 'default';
 
   isNewestOnTop = true;
   isHideOnClick = true;
   isDuplicatesPrevented = false;
   isCloseButton = true;
 
   types: string[] = ['default', 'info', 'success', 'warning', 'error'];
   typeNum: any = {
     default: 'default',
     info: 'info',
     success: 'success',
     warning: 'warning',
     error: 'error',
   }
   animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
   positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
     'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];

     
   showToast(type: string, title: string, body: string) {    
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }
}
