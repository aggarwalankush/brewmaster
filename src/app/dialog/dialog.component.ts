import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  request;
  type;
  title;
  showActions = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.request = data.request;
    this.type = data.type;
    this.init();
  }

  init() {
    if (this.type === 'p') {
      this.title = 'Pending Request';
      this.showActions = true;
    } else if (this.type === 'a') {
      this.title = 'Accepted Request';
      this.showActions = false;
    } else if (this.type === 'd') {
      this.title = 'Declined Request';
      this.showActions = false;
    }
  }

  getWaitingTime(epoch: number): string {
    const then = moment(epoch * 1000);
    const now = moment();
    return _.round(moment.duration(now.diff(then)).asHours()) + ' hours';
  }

}
