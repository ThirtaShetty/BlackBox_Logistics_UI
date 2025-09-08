import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => import('./landing-page/landing-page.routes').then(m => m.LANDING_PAGE_ROUTES)
    },
    {
        path: 'trucker-login',
        loadChildren: () => import('./login-page/login-page.routes').then(m => m.LOGIN_PAGE_ROUTES)
    },
    {
        path: 'trucker-registration',
        loadChildren: () => import('./trucker-registration/trucker-registration.routes').then(m => m.TRUCKER_REGISTRATION_ROUTES)
    },
    {
        path: 'dispatcher-login',
        loadChildren: () => import('./login-page/login-page.routes').then(m => m.LOGIN_PAGE_ROUTES)
    },
    {
        path: 'dispatcher-landing',
        loadChildren: () => import('./dispatcher-landing/dispatcher-landing.routes').then(m => m.DISPATCHER_LANDING_ROUTES)
    },
    {
        path: 'create-load',
        loadChildren: () => import('./load-create/load-create.routes').then(m => m.LOAD_CREATE_ROUTES)
    },
    {
        path: 'manage-loads',
        loadChildren: () => import('./manage-loads/manage-loads.routes').then(m => m.MANAGE_LOADS_ROUTES)
    },
    {
        path: 'manage-routes',
        loadChildren: () => import('./manage-routes/manage-routes.routes').then(m => m.MANAGE_ROUTES_ROUTES)
    },
    {
        path: 'route-details/:id',
        loadChildren: () => import('./route-details/route-details.routes').then(m => m.ROUTE_DETAILS_ROUTES)
    }
];
