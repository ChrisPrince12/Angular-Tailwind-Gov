import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  faCalendar = faCalendar
}
