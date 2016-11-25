import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";

// Pages
import { HomeComponent } from "./components/pages/home/home.component";
import { AuthComponent } from "./components/auth/auth.component";
import { LogsComponent } from "./components/logs/logs.component";
import { UserComponent } from "./components/user/user.component";
import {ManagementComponent} from "./components/management/management.component";

// Sections
import { NavigationComponent } from "./components/sections/navigation/navigation.component";
import {StatusComponent} from "./components/management/status/status.component";

// Routing
import { routing } from "./app.routing";

// Services
import {UserService} from "./components/user/user.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        LogsComponent,
        NavigationComponent,
        UserComponent,
        StatusComponent,
        ManagementComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule
    ],
    bootstrap: [AppComponent],
    providers : [UserService]
})
export class AppModule {

}