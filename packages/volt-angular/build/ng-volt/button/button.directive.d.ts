import { ElementRef, OnInit } from '@angular/core';
export declare class VoltButtonDirective implements OnInit {
    private el;
    /**
     * sets the button type
     */
    ftButton: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'dangerInverse' | 'link' | 'text';
    /**
     * Specify the size of the button
     */
    ftSize: 'normal' | 'small' | 'large' | 'block';
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    danger: boolean;
    dangerInverse: boolean;
    link: boolean;
    text: boolean;
    smallSize: boolean;
    largeSize: boolean;
    blockSize: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    setButtonClass(classValue: any): void;
    setButtonSize(sizeVal: any): void;
}
