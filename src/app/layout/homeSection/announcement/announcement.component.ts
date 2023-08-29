import { Component } from '@angular/core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
   faBullhorn= faBullhorn
}
