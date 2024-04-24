import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { auth_service } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class login_component implements OnInit {
    constructor(private auth: auth_service) {}  
    showError: boolean = false;
    showOk: boolean = false;
    ngOnInit(): void { }
    
    login_form = new FormGroup({
        login: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    submitForm() {
        if(!this.login_form.valid) { this.showError = true; return; }
        let login = this.login_form.get('login')!.value;
        let password = this.login_form.get('password')!.value;
        this.showError = false;
        if(login && password) { this.auth.signIn(login, password); }
        this.login_form.reset;
    }
}