import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ContentChild,
	OnInit,
	ViewChild,
	AfterContentInit,
	HostListener,
	OnDestroy
} from '@angular/core';

import { Observable, fromEvent, of, Subscription } from 'rxjs';


@Component({
	selector: 'ft-dropdown',
	templateUrl: './dropdown.component.html'
})

export class DropdownComponent {
	@ViewChild('dropdownListElement') private dropdownListElement: ElementRef;

	@Input() public displayLabel: string;
	@Input() public helperText: string;
	@Input() public dropdownContainerText: string = 'Select';

	public menuIsClosed: boolean = true;
	public dropUp: boolean = false;
	public noop = this._noop.bind(this);


	_noop() {}

	toggleMenu() {
		if (this.menuIsClosed) {
			this.openMenu();
		} else {
			this.closeMenu();
		}
	}


	openMenu() {
		this.menuIsClosed = false;

		/**
		// move the dropdown list to the body if we're not appending inline
		// and position it relative to the dropdown wrapper
		if (!this.appendInline) {
			this.addScrollEventListener();
			this._appendToBody();
		} */

		// set the dropdown menu to drop up if it's near the bottom of the screen
		// setTimeout lets us measure after it's visible in the DOM
		setTimeout(() => {
			const menu = this.dropdownListElement.nativeElement;
			const boundingClientRect = menu.getBoundingClientRect();

			if (boundingClientRect.bottom > window.innerHeight) {
				// min height of 100px
				if (window.innerHeight - boundingClientRect.top > 100) {
					// remove the conditional once this api is settled and part of abstract-dropdown-view.class
					// if (this.view["enableScroll"]) {
					// 	this.view["enableScroll"]();
					// }
				} else {
					this.dropUp = true;
				}
			} else {
				this.dropUp = false;
			}
		}, 0);

		// we bind noop to document.body.firstElementChild to allow safari to fire events
		// from document. Then we unbind everything later to keep things light.
		// document.body.firstElementChild.addEventListener("click", this.noop, true);
		// document.body.firstElementChild.addEventListener("keydown", this.noop, true);
		// document.addEventListener("click", this.outsideClick, true);
		// document.addEventListener("keydown", this.outsideKey, true);
		// setTimeout(() => this.view.initFocus(), 0);

	}

	closeMenu() {
		this.menuIsClosed = true;
	}

}
