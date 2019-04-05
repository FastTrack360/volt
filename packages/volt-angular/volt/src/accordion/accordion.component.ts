import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from '@angular/core';

import { AccordionItemComponent } from './accordion-item.component';

@Component({
	selector: 'ft-accordion',
	template: `
		<ul class='ft--accordion'>
			<ng-content></ng-content>
		</ul>
	`
})

export class AccordionComponent implements AfterContentInit {
	@ContentChildren(AccordionItemComponent) children: QueryList<AccordionItemComponent>;

	protected _skeleton = false;

	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): any {
		return this._skeleton;
	}

	ngAfterContentInit() {
		this.updateChildren();
	}

	protected updateChildren() {
		if (this.children) {
			this.children.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
