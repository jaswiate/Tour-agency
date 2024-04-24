import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { auth_service } from '../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class register_component implements OnInit {
    constructor(private auth: auth_service) {}  
    showError: boolean = false;
    showOk: boolean = false;
    ngOnInit(): void { }
    
    register_form = new FormGroup({
        login: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    submitForm() {
        if(!this.register_form.valid) { this.showError = true; return; }
        let login = this.register_form.get('login')!.value;
        let password = this.register_form.get('password')!.value;
        this.showError = false;
        if(login && password) { this.auth.register(login, password); }
        this.register_form.reset;
    }
}