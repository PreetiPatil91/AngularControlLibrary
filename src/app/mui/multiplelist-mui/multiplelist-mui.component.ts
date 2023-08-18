import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
@Component({
  selector: 'app-multiplelist-mui',
  templateUrl: './multiplelist-mui.component.html',
  styleUrls: ['./multiplelist-mui.component.css']
})
export class MultiplelistMuiComponent {
  @Input() availableTexts: string[] = [];
  selectedTexts = new FormControl();
  filteredTexts: Observable<string[]>;

  constructor() {
    this.filteredTexts = this.selectedTexts.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.availableTexts.filter(text => text.toLowerCase().includes(filterValue));
  }
}
