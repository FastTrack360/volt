import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DemoButtonComponent } from './demo-button.component/demo-button.component';


export const APP_ROUTES: Routes = [

	{ path: 'button', component: DemoButtonComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
