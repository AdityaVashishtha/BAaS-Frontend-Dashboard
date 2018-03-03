import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/dashboard/storage.service';


@Component({
  selector: 'app-storage-service',
  templateUrl: './storage-service.component.html',
  styleUrls: ['./storage-service.component.scss']
})
export class StorageServiceComponent implements OnInit {

  private storageConfiguration: Object = {
    uploadDirectory: 'uploads',
    maxNumberOfFilesPerRequest: 1,
    allowedMimeTypes: ['image/jpeg'],
    exceptedMimeTypes: ['application/json'],
    maxFileSizeLimit: 1,
    enableUpload: true
  };
  constructor(
    private storageService: StorageService
  ) { }
  /********** TODO List
  * 1. Create Input to take allowed mime types and excepted mime type. 
  * 2. store allowed mime type in array as above storageConfiguration has variable.
  *    In similar manner so as to user can add in array and delete from array.
  * 3. Integrate front end to storage-service
  * 4. write appropriate service funtion as to put service to the backend.
  * 5. for service funtioning if need backend Route call Me
  *********** TODO LIST END */

  ngOnInit() {

  }

}
