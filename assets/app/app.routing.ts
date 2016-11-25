import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AuthComponent } from "./components/auth/auth.component";
import { LogsComponent } from "./components/logs/logs.component";
import { UserComponent } from "./components/user/user.component";
import {ManagementComponent} from "./components/management/management.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'logs',
        component: LogsComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'auth/signin',
        component: AuthComponent
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES);