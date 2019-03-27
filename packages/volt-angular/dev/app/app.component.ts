import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

import { APP_ROUTES } from './app.routes';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	public pageValue: String = '';
	public routes: Route[] = APP_ROUTES;
	title = 'Volt Dev';

	constructor(private router: Router) {}


	public onNavigate() {
		if (this.pageValue.length) {
			this.router.navigate([this.pageValue]);
		}
	}
}
