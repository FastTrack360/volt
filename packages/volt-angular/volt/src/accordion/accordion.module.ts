import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionService } from './accordion.service';


@NgModule({
	declarations: [
		AccordionComponent,
		AccordionItemComponent
	],
	exports: [
		AccordionComponent,
		AccordionItemComponent
	],
	providers: [
		AccordionService
	],
	imports: [CommonModule]
})

export class VoltAccordionModule { }
