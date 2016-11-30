sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Operations", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		onGetNearestAirport: function(oEvent) {
			var sLatitude = this.getView().byId("idLatitude").getValue();
			var sLongitude = this.getView().byId("idLongitude").getValue();
			
			this.getView().byId("getNearestAirport").getObjectBinding().setParameter("lat", sLatitude).setParameter("lon", sLongitude).execute();
		}
	});

});