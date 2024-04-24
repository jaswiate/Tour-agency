import { Component, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { first, firstValueFrom, map, Observable } from 'rxjs';
import { Tour } from '../ITour';
import { Roles } from '../IRoles';
import { User } from '../User';


@Injectable({providedIn: 'root'})
export class firebase_service {
    tours!: Observable<any[]>;
    private nextId: number | undefined
    constructor(public db: AngularFireDatabase) {
        this.tours = this.db.list<any>('Tours').valueChanges();
        this.db.list('Tours', ref => ref.orderByChild('id').limitToLast(1)).valueChanges().subscribe((res: any[]) => {this.nextId = res[0]?.id + 1})
    }
    getTours(): Observable<any[]> { return this.tours }
    addTour(tour: Tour) {
        this.db.list('Tours').push({
            id: tour.id,
            Name: tour.name,
            Country: tour.country,
            Start: tour.start,
            End: tour.end,
            Price: tour.price,
            Place: tour.place,
            Image: tour.image,
            Desc: tour.desc,
            Currency: tour.currency,
            Likes: tour.likes,
            Dislikes: tour.dislikes
        })
    }
    getNextId() { return this.nextId }
    removeDish(idx: number) {
        this.db.list('Tours').snapshotChanges().pipe(first()).subscribe((items:any) => {
            for(let i of items) {
                if(i.payload.val().id == idx) {
                    this.db.list('Tours').remove(i.payload.key)
                }
            }
        });
    }
    updateTour(data: any, s: string) {
        this.db.list('Tours').snapshotChanges().pipe(first()).subscribe((items: any) => {
            for(let i of items) {
                if(i.payload.val().id == s) {
                    this.db.list('Tours').update(i.payload.key, data)
                }
            }
        });
    }
    changeTourProperty(idx: number, value: any, flag: number) {
        this.db.list('Tours').snapshotChanges().pipe(first()).subscribe((items:any) => {
            for(let i of items) {
                if(i.payload.val().id == idx) {
                    if(flag == 0) {
                        this.db.list('Tours').update(i.payload.key, {Price: value})
                    }
                    else if(flag == 1) {
                        this.db.list('Tours').update(i.payload.key, {Name: value})
                    }
                    else if(flag == 2) {
                        this.db.list('Tours').update(i.payload.key, {ShortDesc: value})
                    }
                }
            }
        })
    }
    addUser(user: User) {
        this.db.object('/users/' + user.uid).set({ email: user.email, roles: user.roles });
    }
    async getUserRoles(uid: string) {
        return firstValueFrom(this.db.object('/users/' + uid + '/roles').valueChanges());
    }
    getUsers() { return this.db.list('users').snapshotChanges(); }
    changeUserRoles(uid: string, role: string, value: string) {
        let c = '{"' + role + '"' + ':' + value + '}';
        this.db.object('/users/' + uid + '/roles').update(JSON.parse(c));
    }
}