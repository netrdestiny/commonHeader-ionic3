import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  
  defaultTitle = "My default title";
  _title = this.defaultTitle;

  @Input()
  set title(newTitle: string) {
      newTitle = newTitle.trim();
      if (newTitle.length === 0) {
          newTitle = this.defaultTitle;
      }
      this._title = newTitle;
  }
  
  get title() {
      return this._title;
  }

  constructor() {
  }

}
