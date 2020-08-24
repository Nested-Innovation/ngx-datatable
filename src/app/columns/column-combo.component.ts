import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'column-combo-demo',
  template: `
    <div>
      <h3>
        Combo Column Widths
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-combo.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.combo"
        [headerHeight]="50"
        [footerHeight]="50"
        [scrollbarH]="true"
        rowHeight="auto"
      >
        <ngx-datatable-column name="Id" [width]="80" [canAutoResize]="false"></ngx-datatable-column>
        <ngx-datatable-column name="Name" [width]="300" [canAutoResize]="false"></ngx-datatable-column>
        <ngx-datatable-column name="Gender" [flexGrow]="1"></ngx-datatable-column>
        <ngx-datatable-column name="Age" [flexGrow]="2"></ngx-datatable-column>
        <ngx-datatable-column name="City" [width]="300" [canAutoResize]="false" prop="address.city"></ngx-datatable-column>
        <ngx-datatable-column name="State" [width]="300" [canAutoResize]="false" prop="address.state"></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class ColumnComboComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
