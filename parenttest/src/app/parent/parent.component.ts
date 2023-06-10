import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message = 'Hello from parent!';
  notification = '';

  handleNotify(message: string) {
    this.notification = message;
  }
}


