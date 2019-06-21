import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	EventEmitter,
	Output
} from '@angular/core';

import { AccordionItemComponent } from './accordion-item.component';
import { AccordionService } from './accordion.service';

@Component({
	selector: 'ft-accordion',
	template: `
		<ul class='ft--accordion'>
			<ng-content></ng-content>
		</ul>
	`
})

export class AccordionComponent implements AfterContentInit {
	@ContentChildren(AccordionItemComponent) children: QueryList<
		AccordionItemComponent
	>;

	// protected _skeleton = false;
	protected openAll = true;

	@Input()
	set skeleton(value: any) {
		this.openAll = JSON.parse(value);
		// this.updateChildren();
	}

	get skeleton(): any {
		return this.openAll;
	}

	constructor(private accordionService: AccordionService) {}

	ngAfterContentInit() {
		this.updateChildren();
		this.accordionService.collapseContent$.subscribe((response: any) => {
			console.log(this.children);
			this.children.forEach(child => {
				if (response && response.id !== child.id) {
					child.expanded = false;
				}
			});
		});
	}

	protected updateChildren() {
		if (this.children) {
			this.children.toArray().forEach(child => (child.openAll = this.openAll));
		}
	}

}

