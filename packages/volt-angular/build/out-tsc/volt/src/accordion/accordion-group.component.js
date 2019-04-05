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
var accordion_component_1 = require("./accordion.component");
var PanelOpenType;
(function (PanelOpenType) {
    PanelOpenType[PanelOpenType["single"] = 1] = "single";
    PanelOpenType[PanelOpenType["multiple"] = 2] = "multiple";
})(PanelOpenType = exports.PanelOpenType || (exports.PanelOpenType = {}));
var PanelCloseDefaults;
(function (PanelCloseDefaults) {
    PanelCloseDefaults[PanelCloseDefaults["all"] = 0] = "all";
    PanelCloseDefaults[PanelCloseDefaults["none"] = 1] = "none";
})(PanelCloseDefaults = exports.PanelCloseDefaults || (exports.PanelCloseDefaults = {}));
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.openType = 1;
        this.closeDefaults = undefined;
    }
    AccordionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.panels.toArray().forEach(function (panel, key) {
            panel.toggle.subscribe(function () {
                _this.onTogglePanel(panel);
            });
            _this.setupCloseDefaultSettings(panel, key);
            _this.changeDetectorRef.applyChanges();
        });
    };
    AccordionGroupComponent.prototype.onTogglePanel = function (accordion) {
        if (PanelOpenType.single == this.openType) {
            this.panels.toArray().forEach(function (t) { return t.isOpened = false; });
        }
        accordion.isOpened = !accordion.isOpened;
    };
    AccordionGroupComponent.prototype.setupCloseDefaultSettings = function (accordion, index) {
        accordion.open = false;
        if (this.closeDefaults === PanelCloseDefaults[0]) {
            // All
            accordion.isOpened = true;
        }
        else if (this.closeDefaults === PanelCloseDefaults[1]) {
            // None
            accordion.isOpened = false;
        }
        else if (!this.closeDefaults && index === 0) {
            accordion.isOpened = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AccordionGroupComponent.prototype, "openType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "closeDefaults", void 0);
    __decorate([
        core_1.ContentChildren(accordion_component_1.AccordionComponent),
        __metadata("design:type", core_1.QueryList)
    ], AccordionGroupComponent.prototype, "panels", void 0);
    AccordionGroupComponent = __decorate([
        core_1.Component({
            selector: 'ft-accordion-group',
            template: "\n\t\t<ng-content></ng-content>\n\t",
            styleUrls: ['./accordion.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], AccordionGroupComponent);
    return AccordionGroupComponent;
}());
exports.AccordionGroupComponent = AccordionGroupComponent;
//# sourceMappingURL=accordion-group.component.js.map