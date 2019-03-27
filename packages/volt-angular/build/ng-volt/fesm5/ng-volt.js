import { Directive, ElementRef, HostBinding, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VoltButtonDirective = /** @class */ (function () {
    function VoltButtonDirective(el) {
        this.el = el;
        /**
         * sets the button type
         */
        this.ftButton = 'primary';
        /**
         * Specify the size of the button
         */
        this.ftSize = 'normal';
        this.primary = false;
        this.secondary = false;
        this.tertiary = false;
        this.danger = false;
        this.dangerInverse = false;
        this.link = false;
        this.text = false;
        this.smallSize = false;
        this.largeSize = false;
        this.blockSize = false;
    }
    /**
     * @return {?}
     */
    VoltButtonDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elTemplate = this.el.nativeElement;
        if (elTemplate && !elTemplate.getAttribute('type')) {
            elTemplate.setAttribute('type', 'button');
        }
        this.setButtonClass(this.ftButton);
        this.setButtonSize(this.ftSize);
    };
    /**
     * @param {?} classValue
     * @return {?}
     */
    VoltButtonDirective.prototype.setButtonClass = /**
     * @param {?} classValue
     * @return {?}
     */
    function (classValue) {
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
    };
    /**
     * @param {?} sizeVal
     * @return {?}
     */
    VoltButtonDirective.prototype.setButtonSize = /**
     * @param {?} sizeVal
     * @return {?}
     */
    function (sizeVal) {
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
    };
    VoltButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ftButton]'
                },] }
    ];
    /** @nocollapse */
    VoltButtonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    VoltButtonDirective.propDecorators = {
        ftButton: [{ type: Input }],
        ftSize: [{ type: Input }],
        primary: [{ type: HostBinding, args: ['class.ft-button',] }],
        secondary: [{ type: HostBinding, args: ['class.ft-button--secondary',] }],
        tertiary: [{ type: HostBinding, args: ['class.ft-button--tertiary',] }],
        danger: [{ type: HostBinding, args: ['class.ft-button--danger',] }],
        dangerInverse: [{ type: HostBinding, args: ['class.ft-button--danger-inverse',] }],
        link: [{ type: HostBinding, args: ['class.ft-button--link',] }],
        text: [{ type: HostBinding, args: ['class.ft-button--txt',] }],
        smallSize: [{ type: HostBinding, args: ['class.ft-button--sm',] }],
        largeSize: [{ type: HostBinding, args: ['class.ft-button--lg',] }],
        blockSize: [{ type: HostBinding, args: ['class.ft-button--block',] }]
    };
    return VoltButtonDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VoltModule = /** @class */ (function () {
    function VoltModule() {
    }
    /**
     * @return {?}
     */
    VoltModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: VoltModule,
            providers: []
        };
    };
    VoltModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        VoltButtonDirective
                    ],
                    exports: [
                        VoltButtonDirective
                    ]
                },] }
    ];
    return VoltModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VoltButtonDirective, VoltModule };

//# sourceMappingURL=ng-volt.js.map