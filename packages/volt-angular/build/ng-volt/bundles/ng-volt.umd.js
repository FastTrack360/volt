(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-volt', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-volt'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
            { type: core.Directive, args: [{
                        selector: '[ftButton]'
                    },] }
        ];
        /** @nocollapse */
        VoltButtonDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        VoltButtonDirective.propDecorators = {
            ftButton: [{ type: core.Input }],
            ftSize: [{ type: core.Input }],
            primary: [{ type: core.HostBinding, args: ['class.ft-button',] }],
            secondary: [{ type: core.HostBinding, args: ['class.ft-button--secondary',] }],
            tertiary: [{ type: core.HostBinding, args: ['class.ft-button--tertiary',] }],
            danger: [{ type: core.HostBinding, args: ['class.ft-button--danger',] }],
            dangerInverse: [{ type: core.HostBinding, args: ['class.ft-button--danger-inverse',] }],
            link: [{ type: core.HostBinding, args: ['class.ft-button--link',] }],
            text: [{ type: core.HostBinding, args: ['class.ft-button--txt',] }],
            smallSize: [{ type: core.HostBinding, args: ['class.ft-button--sm',] }],
            largeSize: [{ type: core.HostBinding, args: ['class.ft-button--lg',] }],
            blockSize: [{ type: core.HostBinding, args: ['class.ft-button--block',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.VoltButtonDirective = VoltButtonDirective;
    exports.VoltModule = VoltModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-volt.umd.js.map