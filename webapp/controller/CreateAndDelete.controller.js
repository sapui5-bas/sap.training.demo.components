sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, Device, JSONModel, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.controller.CreateAndDelete", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			// var oTable = this.getView().byId("idTable");
			// var oBinding = oTable.getBinding("items");
			// var oContext = oBinding.create();

			// var oSimpleForm = this.getView().byId("idForm");
			// oSimpleForm.setBindingContext(oContext);

			// // Note: This promise fails only if the transient entity is deleted
			// oContext.created().then(function() {
			// 	MessageToast.show("Airline successfully created");
			// });

		},

		// onSaveAirline: function(oEvent) {
		// 	var oView = this.getView();

		// 	function resetBusy() {
		// 		oView.setBusy(false);
		// 	}

		// 	// lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
		// 	oView.setBusy(true);
		// 	oView.getModel().submitBatch("AirlineCreateGroup").then(resetBusy, resetBusy);
		// },

		onDeleteAirline: function(oEvent) {

			var oTable = this.getView().byId("idTable");
			var oAirlineContext = oEvent.getParameter("listItem").getBindingContext();

			oAirlineContext.delete("$auto").then(function() {
				oTable.removeSelections();
				MessageBox.alert("Airline deleted", {
					icon: MessageBox.Icon.SUCCESS,
					title: "Success"
				});
			}, function(oError) {
				MessageBox.alert("Could not delete Airline: " + oError.message, {
					icon: MessageBox.Icon.ERROR,
					title: "Error"
				});
			});
		},

		onOpenDialog: function() {
			this.getOwnerComponent().newAirlineDialog.open(this.getView());
		}

	});

});