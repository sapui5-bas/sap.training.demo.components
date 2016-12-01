sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageToast"
], function(Controller, Device, MessageToast) {
	"use strict";

	return Controller.extend("sap.training.controller.BatchControl", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		onCancelName: function(oEvent) {
			this.getView().getModel().resetChanges("NameUpdateGroup");
		},

		onSaveName: function(oEvent) {
			var promise = this.getView().getModel().submitBatch("NameUpdateGroup");
			promise.then(function(result) {
				MessageToast.show("User Name successfully updated");
			}, function(err) {
				console.log(err);
			});
		},

		onCancelAirplaneName: function(oEvent) {
			this.getView().getModel().resetChanges("AirlineNameUpdateGroup");
		},

		onSaveAirplaneName: function(oEvent) {
			var oModel = this.getView().getModel();
			var promise = this.getView().getModel().submitBatch("AirlineNameUpdateGroup");
			promise.then(function(result) {
				MessageToast.show("Airline Name successfully updated");
				oModel.refresh();
			}, function(err) {
				console.log(err);
			});
		}
	});

});