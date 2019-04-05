"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
    VoltButtonDirective.prototype.ngOnInit = function () {
        var elTemplate = this.el.nativeElement;
        if (elTemplate && !elTemplate.getAttribute('type')) {
            elTemplate.setAttribute('type', 'button');
        }
        this.setButtonClass(this.ftButton);
        this.setButtonSize(this.ftSize);
    };
    VoltButtonDirective.prototype.setButtonClass = function (classValue) {
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
    VoltButtonDirective.prototype.setButtonSize = function (sizeVal) {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], VoltButtonDirective.prototype, "ftButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], VoltButtonDirective.prototype, "ftSize", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "primary", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--secondary'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "secondary", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--tertiary'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "tertiary", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--danger'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "danger", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--danger-inverse'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "dangerInverse", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--link'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "link", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--txt'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "text", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--sm'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "smallSize", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--lg'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "largeSize", void 0);
    __decorate([
        core_1.HostBinding('class.ft-button--block'),
        __metadata("design:type", Object)
    ], VoltButtonDirective.prototype, "blockSize", void 0);
    VoltButtonDirective = __decorate([
        core_1.Directive({
            selector: '[ftButton]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], VoltButtonDirective);
    return VoltButtonDirective;
}());
exports.VoltButtonDirective = VoltButtonDirective;
//# sourceMappingURL=button.directive.js.map