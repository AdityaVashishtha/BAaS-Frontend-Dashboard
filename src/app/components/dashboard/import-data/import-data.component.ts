import { Component, OnInit } from '@angular/core';
import { ExportDataService } from '../../../services/dashboard/export-data.service';
import { ToastService } from '../../../services/util/toast.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {

  private uploadFileCSV: File;
  private schemaName: String;
  constructor(
    private dataService: ExportDataService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.schemaName = '';
  }

  uploadCSV() {
    console.log("FILE UPLOADING");
    const formData = new FormData();    
    formData.set('uploadCSV',this.uploadFileCSV,this.uploadFileCSV.name);        
    this.dataService.uploadCSV(formData,this.schemaName).subscribe(res=>{
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
  }

  fileSelected(fileInput) {
    //console.log(event.target.files[0]);
    this.uploadFileCSV = fileInput.target.files[0];
  }

}
