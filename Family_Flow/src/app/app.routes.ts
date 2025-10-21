import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.routes').then(m => m.loginRoutes)
    },

    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.routes').then(m => m.registerRoutes)
    }
];
