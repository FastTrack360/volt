import { NgModule, ModuleWithProviders } from '@angular/core';

import { VoltButtonModule } from './button/button.module';
import { VoltAccordionModule } from './accordion/accordion.module';
import { VoltDropdownModule } from './dropdown/dropdown.module';

@NgModule({
	exports: [
		VoltButtonModule,
		VoltAccordionModule,
		VoltDropdownModule
	]
})

export class VoltModule {
}
