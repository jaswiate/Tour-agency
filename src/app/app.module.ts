import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tours_component } from './tours/tours.component';
import { tour_add_component } from './tour-add/tour-add.component';
import { tour_rating_component } from './tour-rating/tour-rating.component';
import { home_page_component } from './home-page/home-page.component';
import { navbar_component } from './navbar/navbar.component';
import { register_component } from './register/register.component';
import { login_component } from './login/login.component';
import { tour_detail_component } from './tour-detail/tour-detail.component';
import { cart_component } from './cart/cart.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { auth_service } from './services/auth.service';
import { client_dashboard_component } from './dashboards/client-dashboard/client-dashboard.component';
import { manager_dashboard_component } from './dashboards/manager-dashboard/manager-dashboard.component';
import { admin_dashboard_component } from './dashboards/admin-dashboard/admin-dashboard.component';
import { tour_mod_component } from './tour-mod/tour-mod.component';
import { tour_review_component } from './tour-review/tour-review.component';


@NgModule({
  declarations: [
    AppComponent,
    tours_component,
    tour_add_component,
    tour_rating_component,
    home_page_component,
    navbar_component,
    register_component,
    login_component, 
    tour_detail_component,
    cart_component,
    client_dashboard_component,
    manager_dashboard_component,
    admin_dashboard_component,
    tour_mod_component,
    tour_review_component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AppRoutingModule,
    ReactiveFormsModule,
    provideAuth(() => getAuth()),
    AngularFireAuthModule
  ],
  providers: [auth_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
