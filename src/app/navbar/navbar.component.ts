import { Component, OnInit } from '@angular/core';
import { auth_service } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbar_component implements OnInit {
  constructor(public auth: auth_service) { }
  ngOnInit(): void { }

}