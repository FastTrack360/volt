"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var demo_button_component_1 = require("./demo-button.component/demo-button.component");
var demo_accordion_component_1 = require("./demo-accordion.component/demo-accordion.component");
exports.APP_ROUTES = [
    { path: 'button', component: demo_button_component_1.DemoButtonComponent },
    { path: 'accordion', component: demo_accordion_component_1.DemoAccordionComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.APP_ROUTES);
//# sourceMappingURL=app.routes.js.map