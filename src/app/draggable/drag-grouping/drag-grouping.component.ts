import { Component, OnInit } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-drag-grouping',
  templateUrl: './drag-grouping.component.html',
  styleUrls: ['./drag-grouping.component.scss']
})
export class DragGroupingComponent implements OnInit {
  dataSource: any[] = [];
  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.dataSource = data.map((item, index) => ({ ...item, id: index }));
      // this.convertData(data);
    });
  }

  ngOnInit(): void {}

  onRowDrag(event) {
    const {
      item: { data },
      previousIndex,
      currentIndex
    } = event;
    const dataSource = [...this.dataSource];
    const step = currentIndex - previousIndex; // moved steps
    const index = dataSource.findIndex(d => d.id === data.id);
    const temp = dataSource.splice(index, 1);
    dataSource.splice(index + step, 0, ...temp);
    this.dataSource = dataSource;
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/forRowGrouping.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
