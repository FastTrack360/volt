"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DemoAccordionComponent = /** @class */ (function () {
    function DemoAccordionComponent() {
        this.users = [
            {
                id: 1001, label: 'Gandalf', desc: 'Gandalf is a fictional character and a protagonist in J. R. R. Tolkien\'s novels The Hobbit and The Lord of the Rings. He is a wizard, member of the Istari order, as well as leader of the Fellowship of the Ring and the army of the West.'
            },
            { id: 1002, label: 'Aragorn', desc: 'Aragorn II, son of Arathorn is a fictional character from J. R. R. Tolkien\'s legendarium. He is one of the main protagonists of The Lord of the Rings. Aragorn was a Ranger of the North, first introduced with the name Strider at Bree, as the Hobbits continued to call him throughout The Lord of the Rings' },
            { id: 1003, label: 'Frodo', desc: 'Frodo Baggins is a fictional character in J. R. R. Tolkien\'s legendarium, and the main protagonist of The Lord of the Rings. Frodo is a hobbit of the Shire who inherits the One Ring from his cousin Bilbo Baggins and undertakes the quest to destroy it in the fires of Mount Doom.' }
        ];
    }
    DemoAccordionComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './demo-accordion.component.html'
        })
    ], DemoAccordionComponent);
    return DemoAccordionComponent;
}());
exports.DemoAccordionComponent = DemoAccordionComponent;
//# sourceMappingURL=demo-accordion.component.js.map