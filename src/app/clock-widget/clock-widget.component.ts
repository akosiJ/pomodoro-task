import { DatePipe } from "@angular/common";
import { Component, OnInit, OnDestroy } from "@angular/core";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-clock-widget',
  standalone: true,
  imports: [DatePipe, MatCardModule],
  templateUrl: './clock-widget.component.html',
  styleUrl: './clock-widget.component.scss'
})
export class ClockWidgetComponent {
  currentTime:string | Date = "";
  intervalId: number | any | undefined;
  ngOnInit(){
    this.currentTime = new Date();
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update every second
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
