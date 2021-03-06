import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule  } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { HomeComponent } from './home/home/home.component';
import { FundEditComponent } from './home/fund-maintenance/fund-edit/fund-edit.component';
import { FundModule } from './FEATURES/fund-module/fund.module'; //eagerly loaded module
import { ErrorComponent } from './error/error.component';
import { TactCommonModule } from './common/common.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromAuth from './auth/auth.reducer';
import {   PrimeNGModule} from './ngprime.module';
import { AboutComponent } from './common/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { hostUrl } from './common/util';
import { HomeModuleModule } from './FEATURES/home-module/home-module.module';


const config: SocketIoConfig = { url: hostUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundMaintenanceComponent,
    ReportComponent,
    HomeComponent,
    FundEditComponent,
    ErrorComponent, AboutComponent, SignupComponent
    //PaginatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,

    MaterialModule, PrimeNGModule,
    FundModule, //routing order matter, load it  FundModule(fund.routing.module) before AppRoutingModule ***
    HomeModuleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TactCommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('authState', fromAuth.authReducer),
    
    SocketIoModule.forRoot(config)

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule { }
