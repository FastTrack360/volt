import { Injectable } from '@angular/core';
import { Subject }from 'rxjs';

@Injectable()
export class AccordionService {

	// Observable string sources
	private collapseContent = new Subject<string>();

	// Observable string streams
	collapseContent$ = this.collapseContent.asObservable();

	// Service message commands
	onCollapseSiblingContent(openContentId: any) {
		this.collapseContent.next(openContentId);
	}

}
