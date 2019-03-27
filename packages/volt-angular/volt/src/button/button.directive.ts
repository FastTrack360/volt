import { Directive, ElementRef, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[ftButton]'
})

export class VoltButtonDirective implements OnInit {
	/**
	 * sets the button type
	 */
	@Input() ftButton: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'dangerInverse' | 'link' | 'text' = 'primary';
	/**
	 * Specify the size of the button
	 */
	@Input() ftSize: 'normal' | 'small' | 'large' | 'block' = 'normal';

	@HostBinding('class.ft-button') primary = false;
	@HostBinding('class.ft-button--secondary') secondary = false;
	@HostBinding('class.ft-button--tertiary') tertiary = false;
	@HostBinding('class.ft-button--danger') danger = false;
	@HostBinding('class.ft-button--danger-inverse') dangerInverse = false;
	@HostBinding('class.ft-button--link') link = false;
	@HostBinding('class.ft-button--txt') text = false;

	@HostBinding('class.ft-button--sm') smallSize = false;
	@HostBinding('class.ft-button--lg') largeSize = false;
	@HostBinding('class.ft-button--block') blockSize = false;

	constructor(private el: ElementRef) { }

	ngOnInit(): void {
		const elTemplate: Element = this.el.nativeElement;
		if (elTemplate && !elTemplate.getAttribute('type')) {
			elTemplate.setAttribute('type', 'button');
		}
		this.setButtonClass(this.ftButton);
		this.setButtonSize(this.ftSize);
	}

	setButtonClass(classValue) {
		switch (classValue) {
			case 'secondary':
				this.secondary = true;
				break;
			case 'tertiary':
				this.tertiary = true;
				break;
			case 'danger':
				this.danger = true;
				break;
			case 'dangerInverse':
				this.dangerInverse = true;
				break;
			case 'link':
				this.link = true;
				break;
			case 'text':
				this.text = true;
				break;
			default:
				this.primary = true;
				break;
		}
	}

	setButtonSize(sizeVal) {
		switch (sizeVal) {
			case 'small':
				this.smallSize = true;
				break;
			case 'large':
				this.largeSize = true;
				break;
			case 'block':
				this.blockSize = true;
				break;
			default:
				break;
		}
	}



}

