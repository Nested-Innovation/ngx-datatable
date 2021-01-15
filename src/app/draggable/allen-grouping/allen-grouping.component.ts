import { Component, OnInit } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
@Component({
  selector: 'app-allen-grouping',
  templateUrl: './allen-grouping.component.html',
  styleUrls: ['./allen-grouping.component.scss']
})
export class AllenGroupingComponent implements OnInit {
  dataSource: any[] = [];
  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.convertData(data);
    });
  }

  ngOnInit(): void {}

  private convertData(data: any[]) {
    this.dataSource = data
      .map(item => {
        const { statementDate, transactions, id, balanceStart } = item;
        return (transactions as Array<any>).map(inner => ({
          ...inner,
          statementDate,
          parentId: id,
          balanceStart
        }));
      })
      .reduce((pre, curr) => [...pre, ...curr], []);
    console.log(this.dataSource);
  }

  onRowDrag(event) {
    console.log(event);
    const {
      item: { data },
      previousIndex,
      currentIndex
    } = event;
    const dataSource = [...this.dataSource];
    const step = currentIndex - previousIndex; // 移动的步长
    const index = dataSource.findIndex(d => d.id === data.id && d.parentId === data.parentId);
    const temp = dataSource.splice(index, 1);
    dataSource.splice(index + step, 0, ...temp);
    this.dataSource = dataSource;
    console.log(this.dataSource);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/drag-grouping.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  displayCheck() {
    return true;
  }
}
