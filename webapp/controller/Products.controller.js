sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.training.products.controller.Products", {

		onPress: function (oEvent) {

			var oComponent = this.getOwnerComponent();

			var mManifest = oComponent.getManifest();
			var mAppData = oComponent.getManifestEntry("sap.app");
			var mConfig = oComponent.getManifestEntry("/sap.ui5/config");

		}

	});

});