import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-fileupload-png',
  templateUrl: './dynamic-fileupload-png.component.html',
  styleUrls: ['./dynamic-fileupload-png.component.css']
})
export class DynamicFileuploadPngComponent {
  @Input() mode: 'advanced' | 'basic' | undefined = 'advanced';
  @Input() multiple: boolean = false;
  @Input() accept: string = '';
  @Input() maxFileSize: number = 1000000;
  @Input() url: string = '';

  onUpload(event: any) {
    // Handle the file upload logic here
    console.log('Uploaded Files:', event.files);
  }
}
