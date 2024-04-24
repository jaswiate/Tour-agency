import { Component, OnInit } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { auth_service } from 'src/app/services/auth.service';
import { firebase_service } from 'src/app/services/firebase.service';
import { User } from 'src/app/User';
import { Roles } from 'src/app/IRoles';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css'],
})
export class admin_dashboard_component implements OnInit {
    constructor(public auth: auth_service, public fb: firebase_service) { }
    selectedPersistence = this.auth.persistenceSetting;

    selectedRoleToAdd: any;
    selectedRoleToDismiss: any;
  
    users: User[] = [];
    usersSub: Subscription | undefined;
    
    ngOnInit(): void { 
        this.usersSub = this.fb.getUsers().subscribe((users) => { this.users = [];
            for (let user of users) {
                let userToAdd = new User(user.payload.val());
                console.log(user.payload.val());
                userToAdd.uid = user.payload.key || 'undefined';
                this.users.push(userToAdd);
            }
        });
    }
    ngOnDestroy(): void { this.usersSub?.unsubscribe(); }
    chosenPersistence() {
        console.log(this.selectedPersistence);
        this.auth.changePersistence(this.selectedPersistence);
    }
    banUser(uid: string) { this.fb.changeUserRoles(uid, 'banned', 'true'); }
    setRole(uid: string, role: string, value: boolean) { this.fb.changeUserRoles(uid, role, String(value)); }
    getUserRoles(uid: string): Roles | null {
        let searchedUser = this.findUserByUid(uid);
        if (searchedUser != null) return searchedUser.roles;
        return null;
    }
    findUserByUid(uid: string): User | null {
        for (let user of this.users) {
            if (user.uid == uid) return user;
        }
        return null;
    }
}