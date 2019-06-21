import {
	Component,
	Input,
	HostBinding,
	Output,
	EventEmitter
} from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
	selector: 'ft-accordion-item',
	templateUrl: './accordion-item.component.html'
})

export class AccordionItemComponent {
	static accordionItemCount = 0;

	@Input() title = `Title ${AccordionItemComponent.accordionItemCount}`;
	@Input() id = `accordion-item-${AccordionItemComponent.accordionItemCount}`;

	@Input() actionType: number;
	@Input() defaultOpenType: number;

	@Input() customHeaderClass: string;

	@Input() openAll: boolean = true;

	@Output() selected = new EventEmitter();

	@HostBinding('class.ft--accordion__item--active') @Input() expanded = false;
	@HostBinding('class.ft--accordion__item') itemClass = true;
	@HostBinding('style.display') itemType = 'list-item';

	constructor(private accordionService: AccordionService) {
		AccordionItemComponent.accordionItemCount++;
	}

	public toggleExpanded() {
		this.expanded = !this.expanded;
		this.selected.emit({id: this.id, expanded: this.expanded});
		this.accordionService.onCollapseSiblingContent({ id: this.id });
	}

}
