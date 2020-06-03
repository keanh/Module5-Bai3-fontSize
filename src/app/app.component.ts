// @ts-ignore
import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'font-size';

  fontSize = 14;
  onChange(value){
    this.fontSize = value;
  }
}
