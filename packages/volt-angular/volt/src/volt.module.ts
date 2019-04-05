import { NgModule, ModuleWithProviders } from '@angular/core';

import { VoltButtonModule } from './button/button.module';
import { VoltAccordionModule } from './accordion/accordion.module';

@NgModule({
	exports: [
		VoltButtonModule,
		VoltAccordionModule
	]
})

export class VoltModule {
}
