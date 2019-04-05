import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { VoltModule } from '@fasttrack360/ng-volt';
import { ROUTING } from './app.routes';
import { DemoButtonComponent } from './demo-button.component/demo-button.component';
import { DemoAccordionComponent } from './demo-accordion.component/demo-accordion.component';


@NgModule({
	declarations: [
		AppComponent,

		// Demo Components
		DemoButtonComponent,
		DemoAccordionComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ROUTING,
		VoltModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
