import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { auth_service } from 'src/app/services/auth.service';
import { firebase_service } from 'src/app/services/firebase.service';

@Component({
    selector: 'app-client-dashboard',
    templateUrl: './client-dashboard.component.html',
    styleUrls: ['./client-dashboard.component.css'],
})
export class client_dashboard_component implements OnInit {
    constructor(public auth: auth_service, public fb: firebase_service) { }
    ngOnInit(): void { this.auth.getUserData().then(res => { console.log(res) }); }
}