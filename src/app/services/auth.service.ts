import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { first, firstValueFrom, Observable } from 'rxjs';
import { firebase_service } from './firebase.service';
import { User } from '../User';
import { Roles } from '../IRoles';

@Injectable({ providedIn: 'root', })
export class auth_service {
    userData: any = null;
    userRoles: Roles = {
        guest: true,
        client: false,
        manager: false,
        admin: false,
        banned: false
    };
    persistenceSetting: string = 'local';

    constructor(
        private ang_fire_auth: AngularFireAuth, 
        private router: Router,
        private fb: firebase_service
    ) {
        ang_fire_auth.authState.subscribe(async (ev: any) => {
            if(ev) {
                this.userData = ev;
                const roles = await this.fb.getUserRoles(ev.uid);
                this.userRoles = roles as Roles;
            }
            else {
                this.userData = null;
                this.userRoles = {
                    guest: true,
                    client: false,
                    manager: false,
                    admin: false,
                    banned: false
                }
            }
        });
    }
    signIn(email: string, password: string) {
        return this.ang_fire_auth.setPersistence(this.persistenceSetting).then((_) => {
            return this.ang_fire_auth.signInWithEmailAndPassword(email, password).then((ev) => {
                this.router.navigate(['tours']);
            }).catch((err) => { window.alert(err.message); })
        });
    }
    register(email: string, password: string) {
        return this.ang_fire_auth.createUserWithEmailAndPassword(email, password).then((res) => {
            let userData = new User(res.user);
            console.log(userData);
            this.fb.addUser(userData);
            this.router.navigate(['tours']);
        }).catch((err) => { window.alert(err.message); })
    }
    getUserData() { return this.ang_fire_auth.currentUser; }
    getAuthenticated(): Observable<any> { return this.ang_fire_auth.authState; }
    signOut() { return this.ang_fire_auth.signOut().then((ev) => { this.router.navigate(['']); }) }
    checkIfLoggedIn() { return this.userData != null; }
    changePersistence(s: string) { this.persistenceSetting = s; }
}