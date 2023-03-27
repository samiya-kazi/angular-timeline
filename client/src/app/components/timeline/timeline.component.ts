import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  order = {
    status: 'out for delivery'
  }

  step: number = 0;


  ngOnInit () {
    switch (this.order.status) {
      case 'pending':
        this.step = 0;
        break;
      case 'approved':
        this.step = 1;
        break;
      case 'printing':
        this.step = 2;
        break;
      case 'out for delivery':
        this.step = 3;
        break;
      default:
        this.step = 0;
        break;
    }
  }
}
