sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("routing.controller.View2", {
            onInit: function () {
                // this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Page2").attachMatched(this._onObjectMatched,
                    this);
                // oRouter.getRoute("RouteView1").attachMatched(this._onObjectMatched,
                //     this);    
            },
            // onNavBack: function (oEvent) {
                onNavBack: function () {
                    var oHistory, sPreviousHash, oRouter;
                    oHistory = sap.ui.core.routing.History.getInstance();
                    sPreviousHash = oHistory.getPreviousHash();
                    if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("Page1", true /*no history*/);
                    }
                }
        });
    });
