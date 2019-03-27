/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
export class VoltButtonDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ngOnInit() {
        /** @type {?} */
        const elTemplate = this.el.nativeElement;
        if (elTemplate && !elTemplate.getAttribute('type')) {
            elTemplate.setAttribute('type', 'button');
        }
        this.setButtonClass(this.ftButton);
        this.setButtonSize(this.ftSize);
    }
    /**
     * @param {?} classValue
     * @return {?}
     */
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
    /**
     * @param {?} sizeVal
     * @return {?}
     */
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
VoltButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ftButton]'
            },] }
];
/** @nocollapse */
VoltButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXZvbHQvIiwic291cmNlcyI6WyJidXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1sRixNQUFNLE9BQU8sbUJBQW1COzs7O0lBc0IvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7OztRQWxCekIsYUFBUSxHQUF3RixTQUFTLENBQUM7Ozs7UUFJMUcsV0FBTSxHQUEyQyxRQUFRLENBQUM7UUFFbkMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNMLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ1Asa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDaEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNkLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFZCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRW5CLENBQUM7Ozs7SUFFdkMsUUFBUTs7Y0FDRCxVQUFVLEdBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ2pELElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuRCxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFVBQVU7UUFDeEIsUUFBUSxVQUFVLEVBQUU7WUFDbkIsS0FBSyxXQUFXO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixNQUFNO1lBQ1AsS0FBSyxVQUFVO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixNQUFNO1lBQ1AsS0FBSyxRQUFRO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1AsS0FBSyxlQUFlO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsTUFBTTtZQUNQLEtBQUssTUFBTTtnQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtZQUNQLEtBQUssTUFBTTtnQkFDVixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtZQUNQO2dCQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNO1NBQ1A7SUFDRixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFPO1FBQ3BCLFFBQVEsT0FBTyxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7OztZQTdFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7YUFDdEI7Ozs7WUFKbUIsVUFBVTs7O3VCQVU1QixLQUFLO3FCQUlMLEtBQUs7c0JBRUwsV0FBVyxTQUFDLGlCQUFpQjt3QkFDN0IsV0FBVyxTQUFDLDRCQUE0Qjt1QkFDeEMsV0FBVyxTQUFDLDJCQUEyQjtxQkFDdkMsV0FBVyxTQUFDLHlCQUF5Qjs0QkFDckMsV0FBVyxTQUFDLGlDQUFpQzttQkFDN0MsV0FBVyxTQUFDLHVCQUF1QjttQkFDbkMsV0FBVyxTQUFDLHNCQUFzQjt3QkFFbEMsV0FBVyxTQUFDLHFCQUFxQjt3QkFDakMsV0FBVyxTQUFDLHFCQUFxQjt3QkFDakMsV0FBVyxTQUFDLHdCQUF3Qjs7Ozs7OztJQWhCckMsdUNBQW1IOzs7OztJQUluSCxxQ0FBbUU7O0lBRW5FLHNDQUFnRDs7SUFDaEQsd0NBQTZEOztJQUM3RCx1Q0FBMkQ7O0lBQzNELHFDQUF1RDs7SUFDdkQsNENBQXNFOztJQUN0RSxtQ0FBbUQ7O0lBQ25ELG1DQUFrRDs7SUFFbEQsd0NBQXNEOztJQUN0RCx3Q0FBc0Q7O0lBQ3RELHdDQUF5RDs7Ozs7SUFFN0MsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZnRCdXR0b25dJ1xufSlcblxuZXhwb3J0IGNsYXNzIFZvbHRCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvKipcblx0ICogc2V0cyB0aGUgYnV0dG9uIHR5cGVcblx0ICovXG5cdEBJbnB1dCgpIGZ0QnV0dG9uOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnZGFuZ2VyJyB8ICdkYW5nZXJJbnZlcnNlJyB8ICdsaW5rJyB8ICd0ZXh0JyA9ICdwcmltYXJ5Jztcblx0LyoqXG5cdCAqIFNwZWNpZnkgdGhlIHNpemUgb2YgdGhlIGJ1dHRvblxuXHQgKi9cblx0QElucHV0KCkgZnRTaXplOiAnbm9ybWFsJyB8ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2Jsb2NrJyA9ICdub3JtYWwnO1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uJykgcHJpbWFyeSA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tc2Vjb25kYXJ5Jykgc2Vjb25kYXJ5ID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS10ZXJ0aWFyeScpIHRlcnRpYXJ5ID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS1kYW5nZXInKSBkYW5nZXIgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLWRhbmdlci1pbnZlcnNlJykgZGFuZ2VySW52ZXJzZSA9IGZhbHNlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tbGluaycpIGxpbmsgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLXR4dCcpIHRleHQgPSBmYWxzZTtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmZ0LWJ1dHRvbi0tc20nKSBzbWFsbFNpemUgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5mdC1idXR0b24tLWxnJykgbGFyZ2VTaXplID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuZnQtYnV0dG9uLS1ibG9jaycpIGJsb2NrU2l6ZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsVGVtcGxhdGU6IEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0aWYgKGVsVGVtcGxhdGUgJiYgIWVsVGVtcGxhdGUuZ2V0QXR0cmlidXRlKCd0eXBlJykpIHtcblx0XHRcdGVsVGVtcGxhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdH1cblx0XHR0aGlzLnNldEJ1dHRvbkNsYXNzKHRoaXMuZnRCdXR0b24pO1xuXHRcdHRoaXMuc2V0QnV0dG9uU2l6ZSh0aGlzLmZ0U2l6ZSk7XG5cdH1cblxuXHRzZXRCdXR0b25DbGFzcyhjbGFzc1ZhbHVlKSB7XG5cdFx0c3dpdGNoIChjbGFzc1ZhbHVlKSB7XG5cdFx0XHRjYXNlICdzZWNvbmRhcnknOlxuXHRcdFx0XHR0aGlzLnNlY29uZGFyeSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGVydGlhcnknOlxuXHRcdFx0XHR0aGlzLnRlcnRpYXJ5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkYW5nZXInOlxuXHRcdFx0XHR0aGlzLmRhbmdlciA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZGFuZ2VySW52ZXJzZSc6XG5cdFx0XHRcdHRoaXMuZGFuZ2VySW52ZXJzZSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbGluayc6XG5cdFx0XHRcdHRoaXMubGluayA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcmltYXJ5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0c2V0QnV0dG9uU2l6ZShzaXplVmFsKSB7XG5cdFx0c3dpdGNoIChzaXplVmFsKSB7XG5cdFx0XHRjYXNlICdzbWFsbCc6XG5cdFx0XHRcdHRoaXMuc21hbGxTaXplID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsYXJnZSc6XG5cdFx0XHRcdHRoaXMubGFyZ2VTaXplID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdibG9jayc6XG5cdFx0XHRcdHRoaXMuYmxvY2tTaXplID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXG5cbn1cblxuIl19