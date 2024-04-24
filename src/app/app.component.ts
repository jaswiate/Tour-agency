import { Component } from '@angular/core';
import { auth_service } from './services/auth.service';
import { firebase_service } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-agency';
  constructor(private fb: firebase_service, public auth: auth_service){ }
  ngOnInit(): void{ }
}
