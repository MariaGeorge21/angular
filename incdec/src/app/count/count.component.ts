import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  @Input() counterValue: number |any;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.counterChange.emit(this.counterValue);
    }
  }
}
