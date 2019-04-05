import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltButtonDirective } from './button.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		VoltButtonDirective
	],
	exports: [
		VoltButtonDirective
	]
})

export class VoltButtonModule {

}
