import { Component } from '@angular/core';
import { AuthService } from '../../core/services/authentcation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  constructor(public authServ:AuthService){}
}
