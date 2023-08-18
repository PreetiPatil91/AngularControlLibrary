import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-multiplelist-mui',
  templateUrl: './dynamic-multiplelist-mui.component.html',
  styleUrls: ['./dynamic-multiplelist-mui.component.css']
})
export class DynamicMultiplelistMuiComponent {
  availableTexts: string[] = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
}
