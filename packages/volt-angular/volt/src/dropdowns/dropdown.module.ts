import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';




@NgModule({
	declarations: [
		DropdownComponent
	],
	exports: [
		DropdownComponent
	],
	providers: [

	],
	imports: [CommonModule]
})

export class VoltDropdownModule { }
