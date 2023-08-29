import { Component } from '@angular/core';
import { faAngleDown,faHouse,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
      faAngleDown = faAngleDown
      faMagnifyingGlass= faMagnifyingGlass
      faHouse = faHouse
}
