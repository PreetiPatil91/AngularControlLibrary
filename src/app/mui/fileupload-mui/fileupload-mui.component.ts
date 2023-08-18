import { Component } from '@angular/core';

@Component({
  selector: 'app-fileupload-mui',
  templateUrl: './fileupload-mui.component.html',
  styleUrls: ['./fileupload-mui.component.css']
})
export class FileuploadMuiComponent {
  showProgress = false;
  showSuccessMessage = false;
  progressValue = 0;
  fileName!: string;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    this.showProgress = true;
    this.fileName = file.name;

    // Simulating an upload process with a delay
    const uploadInterval = setInterval(() => {
      this.progressValue += 5;
      if (this.progressValue >= 100) {
        clearInterval(uploadInterval);
        this.showProgress = false;
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.resetUploadState();
        }, 3000);
      }
    }, 300);
  }

  resetUploadState() {
    this.progressValue = 0;
    this.showSuccessMessage = false;
  }
}