/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
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
export { VoltButtonDirective };
if (false) {
    /**
     * sets the button type
     * @type {?}
     */
    VoltButtonDirective.prototype.ftButton;
    /**
     * Specify the size of the button
     * @type {?}
     */
    VoltButtonDirective.prototype.ftSize;
    /** @type {?} */
    VoltButtonDirective.prototype.primary;
    /** @type {?} */
    VoltButtonDirective.prototype.secondary;
    /** @type {?} */
    VoltButtonDirective.prototype.tertiary;
    /** @type {?} */
    VoltButtonDirective.prototype.danger;
    /** @type {?} */
    VoltButtonDirective.prototype.dangerInverse;
    /** @type {?} */
    VoltButtonDirective.prototype.link;
    /** @type {?} */
    VoltButtonDirective.prototype.text;
    /** @type {?} */
    VoltButtonDirective.prototype.smallSize;
    /** @type {?} */
    VoltButtonDirective.prototype.largeSize;
    /** @type {?} */
    VoltButtonDirective.prototype.blockSize;
    /**
     * @type {?}
     * @private
     */
    VoltButtonDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXZvbHQvIiwic291cmNlcyI6WyJidXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRjtJQTBCQyw2QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7UUFsQnpCLGFBQVEsR0FBd0YsU0FBUyxDQUFDOzs7O1FBSTFHLFdBQU0sR0FBMkMsUUFBUSxDQUFDO1FBRW5DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDTCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNQLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVuQixDQUFDOzs7O0lBRXZDLHNDQUFROzs7SUFBUjs7WUFDTyxVQUFVLEdBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ2pELElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuRCxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLFVBQVU7UUFDeEIsUUFBUSxVQUFVLEVBQUU7WUFDbkIsS0FBSyxXQUFXO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixNQUFNO1lBQ1AsS0FBSyxVQUFVO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1AsS0FBSyxlQUFlO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsTUFBTTtZQUNQLEtBQUssTUFBTTtnQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtZQUNQLEtBQUssTUFBTTtnQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtZQUNQO2dCQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNO1NBQ1A7SUFDRixDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxPQUFPO1FBQ3BCLFFBQVEsT0FBTyxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7O2dCQTdFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCOzs7O2dCQUptQixVQUFVOzs7MkJBVTVCLEtBQUs7eUJBSUwsS0FBSzswQkFFTCxXQUFXLFNBQUMsaUJBQWlCOzRCQUM3QixXQUFXLFNBQUMsNEJBQTRCOzJCQUN4QyxXQUFXLFNBQUMsMkJBQTJCO3lCQUN2QyxXQUFXLFNBQUMseUJBQXlCO2dDQUNyQyxXQUFXLFNBQUMsaUNBQWlDO3VCQUM3QyxXQUFXLFNBQUMsdUJBQXVCO3VCQUNuQyxXQUFXLFNBQUMsc0JBQXNCOzRCQUVsQyxXQUFXLFNBQUMscUJBQXFCOzRCQUNqQyxXQUFXLFNBQUMscUJBQXFCOzRCQUNqQyxXQUFXLFNBQUMsd0JBQXdCOztJQXlEdEMsMEJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTdFWSxtQkFBbUI7Ozs7OztJQUkvQix1Q0FBbUg7Ozs7O0lBSW5ILHFDQUFtRTs7SUFFbkUsc0NBQWdEOztJQUNoRCx3Q0FBNkQ7O0lBQzdELHVDQUEyRDs7SUFDM0QscUNBQXVEOztJQUN2RCw0Q0FBc0U7O0lBQ3RFLG1DQUFtRDs7SUFDbkQsbUNBQWtEOztJQUVsRCx3Q0FBc0Q7O0lBQ3RELHdDQUFzRDs7SUFDdEQsd0NBQXlEOzs7OztJQUU3QyxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tmdEJ1dHRvbl0nXG59KVxuXG5leHBvcnQgY2xhc3MgVm9sdEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8qKlxuXHQgKiBzZXRzIHRoZSBidXR0b24gdHlwZVxuXHQgKi9cblx0QElucHV0KCkgZnRCdXR0b246ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICdkYW5nZXInIHwgJ2RhbmdlckludmVyc2UnIHwgJ2xpbmsnIHwgJ3RleHQnID0gJ3ByaW1hcnknO1xuXHQvKipcblx0ICogU3BlY2lmeSB0aGUgc2l6ZSBvZiB0aGUgYnV0dG9uXG5cdCAqL1xuXHRASW5wdXQoKSBmdFNpemU6ICdub3JtYWwnIHwgJ3NtYWxsJyB8ICdsYXJnZScgfCAnYmxvY2snID0gJ25vcm1hbCc7XG5cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24nKSBwcmltYXJ5ID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS1zZWNvbmRhcnknKSBzZWNvbmRhcnkgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLXRlcnRpYXJ5JykgdGVydGlhcnkgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLWRhbmdlcicpIGRhbmdlciA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tZGFuZ2VyLWludmVyc2UnKSBkYW5nZXJJbnZlcnNlID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS1saW5rJykgbGluayA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tdHh0JykgdGV4dCA9IGZhbHNlO1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS1zbScpIHNtYWxsU2l6ZSA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tbGcnKSBsYXJnZVNpemUgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLWJsb2NrJykgYmxvY2tTaXplID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxUZW1wbGF0ZTogRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblx0XHRpZiAoZWxUZW1wbGF0ZSAmJiAhZWxUZW1wbGF0ZS5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuXHRcdFx0ZWxUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0QnV0dG9uQ2xhc3ModGhpcy5mdEJ1dHRvbik7XG5cdFx0dGhpcy5zZXRCdXR0b25TaXplKHRoaXMuZnRTaXplKTtcblx0fVxuXG5cdHNldEJ1dHRvbkNsYXNzKGNsYXNzVmFsdWUpIHtcblx0XHRzd2l0Y2ggKGNsYXNzVmFsdWUpIHtcblx0XHRcdGNhc2UgJ3NlY29uZGFyeSc6XG5cdFx0XHRcdHRoaXMuc2Vjb25kYXJ5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXJ0aWFyeSc6XG5cdFx0XHRcdHRoaXMudGVydGlhcnkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rhbmdlcic6XG5cdFx0XHRcdHRoaXMuZGFuZ2VyID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkYW5nZXJJbnZlcnNlJzpcblx0XHRcdFx0dGhpcy5kYW5nZXJJbnZlcnNlID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsaW5rJzpcblx0XHRcdFx0dGhpcy5saW5rID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0dGhpcy50ZXh0ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLnByaW1hcnkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzZXRCdXR0b25TaXplKHNpemVWYWwpIHtcblx0XHRzd2l0Y2ggKHNpemVWYWwpIHtcblx0XHRcdGNhc2UgJ3NtYWxsJzpcblx0XHRcdFx0dGhpcy5zbWFsbFNpemUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xhcmdlJzpcblx0XHRcdFx0dGhpcy5sYXJnZVNpemUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0dGhpcy5ibG9ja1NpemUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cblxufVxuXG4iXX0=