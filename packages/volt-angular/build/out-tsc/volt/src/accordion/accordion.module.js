"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var accordion_header_component_1 = require("./accordion-header.component");
var accordion_component_1 = require("./accordion.component");
var accordion_group_component_1 = require("./accordion-group.component");
var VoltAccordionModule = /** @class */ (function () {
    function VoltAccordionModule() {
    }
    VoltAccordionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                accordion_header_component_1.AccordionHeaderComponent,
                accordion_component_1.AccordionComponent,
                accordion_group_component_1.AccordionGroupComponent
            ],
            exports: [
                accordion_header_component_1.AccordionHeaderComponent,
                accordion_component_1.AccordionComponent,
                accordion_group_component_1.AccordionGroupComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], VoltAccordionModule);
    return VoltAccordionModule;
}());
exports.VoltAccordionModule = VoltAccordionModule;
//# sourceMappingURL=accordion.module.js.map