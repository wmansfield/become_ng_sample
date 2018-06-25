
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

import * as $ from 'jquery';
import { HavenSDK } from './shared/services/haven/haven-sdk';
import { SessionModule } from './pages/session/session.module';
import { HttpModule } from '@angular/http';




@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        SessionModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [
        AuthService,
        AuthGuard,
        HavenSDK
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }