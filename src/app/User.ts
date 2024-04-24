import { Roles } from "./IRoles";

export class User {
    email: string;
    uid: string;
    roles!: Roles;

    constructor(userData: any) {
        this.email = userData.email;
        this.uid = userData.uid;
        if(userData.roles != null) { this.roles = userData.roles; }
        else {
            this.roles = {
                client: true,
                guest: true,
                manager: false,
                admin: false,
                banned: false
            };
        }
    }
}