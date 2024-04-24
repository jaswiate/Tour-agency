import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { tours_component } from './tours/tours.component';
import { tour_add_component } from './tour-add/tour-add.component';
import { home_page_component } from './home-page/home-page.component';
import { notfound_404_component } from './notfound-404/notfound-404.component';
import { register_component } from './register/register.component';
import { login_component } from './login/login.component';
import { tour_detail_component } from './tour-detail/tour-detail.component';
import { tour_guard } from './guards/tour.guard';
import { login_guard } from './guards/login.guard';
import { cart_component } from './cart/cart.component';
import { auth_guard } from './guards/auth.guard';
import { client_dashboard_component } from './dashboards/client-dashboard/client-dashboard.component';
import { manager_dashboard_component } from './dashboards/manager-dashboard/manager-dashboard.component';
import { admin_dashboard_component } from './dashboards/admin-dashboard/admin-dashboard.component';
import { tour_mod_component } from './tour-mod/tour-mod.component';
import { manager_guard } from './guards/manager.guard';
import { admin_guard } from './guards/admin.guard';

const routes: Routes = [
  {path: 'tours', component: tours_component},
  {path: 'tours/:id', component: tour_detail_component, canActivate: [tour_guard]},
  {path: 'tour-add', component: tour_add_component},
  {path: 'cart', component: cart_component, canActivate: [auth_guard]},
  {path: 'login', component: login_component, canActivate: [login_guard]},
  {path: 'admin', component: admin_dashboard_component, canActivate: [admin_guard]},
  {path: 'client', component: client_dashboard_component, canActivate: [auth_guard]},
  {path: 'manager', component: manager_dashboard_component, canActivate: [manager_guard]},
  {path: 'manager/mod/:id', component: tour_mod_component, canActivate: [auth_guard, manager_guard]},
  {path: 'register', component: register_component},
  {path: '', component: home_page_component},
  {path: '**', component: notfound_404_component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
