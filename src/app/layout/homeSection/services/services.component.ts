import { Component } from '@angular/core';
import { faEnvelope, faGear, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  faGear = faGear
  faGlobe = faGlobe
  faEnvelope = faEnvelope
  faUser = faUser
}
