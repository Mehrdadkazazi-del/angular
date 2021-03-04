import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent {

  @Output()
  putRingOnIt: EventEmitter<string>;

  constructor() {
    this.putRingOnIt = new EventEmitter();
  }

  liked() {
    this.putRingOnIt.emit('oh oh oh');
  }
}
