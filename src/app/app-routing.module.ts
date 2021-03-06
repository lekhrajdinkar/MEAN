import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { ErrorComponent } from './error/error.component';
import { OrderMgtComponent } from './FEATURES/fund-module/order-mgt/order-mgt.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { NewHomeComponent } from './FEATURES/home-module/home/home.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, //login
  { path: 'login', component: LoginComponent }, //login
  { path: 'signup', component: SignupComponent }, //signup
  
  //old routes
  { path: 'home', component: OrderMgtComponent },
  { path: 'newhome', component: NewHomeComponent },
  { path: 'fundmtn', component: FundMaintenanceComponent },
  { path: 'ordermgt', component: OrderMgtComponent },
  { path: 'rpt', component: ReportComponent  },

  { path: 'user-module', loadChildren:'./FEATURES/user-module/user.module#UserModule', canActivate : [AuthGaurdGuard]}, 

  { path: '**', component: ErrorComponent } //no match > login 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false, preloadingStrategy: PreloadAllModules, useHash:true})],
  exports: [RouterModule],
})


export class AppRoutingModule {}
