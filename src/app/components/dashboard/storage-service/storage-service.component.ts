import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/dashboard/storage.service';
import { ToastService } from '../../../services/util/toast.service';


@Component({
  selector: 'app-storage-service',
  templateUrl: './storage-service.component.html',
  styleUrls: ['./storage-service.component.scss']
})
export class StorageServiceComponent implements OnInit {

  private storageConfiguration = {
    uploadDirectory: 'uploads',
    //maxNumberOfFilesPerRequest: 1,
    allowedMimeTypes: ['image/jpeg'],
    exceptedMimeTypes: ['application/json'],
    maxFileSizeLimit: 1,
    enableUpload: true
  };

  constructor(
    private storageService: StorageService,
    private toastService: ToastService
  ) { }
 
  ngOnInit() {
    this.storageService.getStorageConfiguration()
      .subscribe(res=>{
        console.log(res);
        this.storageConfiguration = res.data;
      });
  }

  saveStorageConfig() {
    console.log(this.storageConfiguration);    
    var validateName = new RegExp("^[A-z]+$");    
    if(validateName.test(this.storageConfiguration.uploadDirectory)) {
      this.storageService.addStorageConfiguration(this.storageConfiguration)
      .subscribe(res=>{        
        if(res.success) {
          this.toastService.showToast(this.toastService.typeNum.info,"",res.message);
        } else {
          this.toastService.showToast(this.toastService.typeNum.error,"",res.message);
        }
      });
    } else {
      alert('Upload directory should only contain alphabate and length less than 50');
    }    
  }


  addAllowedMimeTypeToList(e) {    
    let isPresent = this.storageConfiguration['allowedMimeTypes'].indexOf(e.value);            
    if(isPresent>=0 || e.value.length === 0 )      
      alert("Unique values only!!");
    else {
      var patt = new RegExp("^[A-z]{2,50}/[A-z]{2,50}$");
      var res = patt.test(e.value);
      if(res) {
        this.storageConfiguration['allowedMimeTypes'].push(e.value);
      } else {
        alert('Invalid MIME type!!');
      }
    } 
  }

  removeAllowedMimeTypeFromList(item) {
    let index = this.storageConfiguration['allowedMimeTypes'].indexOf(item);
    if(index>=0) {
      this.storageConfiguration['allowedMimeTypes'].splice(index,1);
    }
  }

  addExceptedMimeTypesToList(e) {    
    let isPresent = this.storageConfiguration['exceptedMimeTypes'].indexOf(e.value);            
    if(isPresent>=0 || e.value.length === 0 )      
      alert("Unique values only!!");
    else {
      var patt = new RegExp("^[A-z]{2,50}/[A-z]{2,50}$");
      var res = patt.test(e.value);
      if(res) {
        this.storageConfiguration['exceptedMimeTypes'].push(e.value);      
      } else {
        alert('Invalid MIME type!!');
      }
    } 
  }

  removeExceptedMimeTypesFromList(item) {
    let index = this.storageConfiguration['exceptedMimeTypes'].indexOf(item);
    if(index>=0) {
      this.storageConfiguration['exceptedMimeTypes'].splice(index,1);
    }
  }

}
