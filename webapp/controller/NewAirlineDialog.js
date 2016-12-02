sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/MessageToast"
], function(Object, MessageToast) {

	"use strict";
	return Object.extend("sap.training.controller.NewAirlineDialog", {

		_getDialog: function() {
			// create dialog lazily
			if (!this._oDialog) {
				// create dialog via fragment factory
				this._oDialog = sap.ui.xmlfragment("sap.training.view.NewAirlineDialog", this);
			}
			return this._oDialog;
		},

		open: function(oView) {
			this.oView = oView;
			var oDialog = this._getDialog();
			// connect dialog to view (models, lifecycle)
			this.oView.addDependent(oDialog);

			var oTable = this.oView.byId("idTable");
			var oBinding = oTable.getBinding("items");
			var oContext = oBinding.create();

			var oSimpleForm = sap.ui.getCore().byId("idForm");
			oSimpleForm.setBindingContext(oContext);

			// Note: This promise fails only if the transient entity is deleted
			oContext.created().then(function() {
				MessageToast.show("Airline successfully created");
			});

			// open dialog
			oDialog.open();
		},

		onSaveAirline: function() {

			var oView = this.oView;

			function resetBusy() {
				oView.setBusy(false);
			}

			// lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
			this.oView.setBusy(true);
			this.oView.getModel().submitBatch("AirlineCreateGroup").then(resetBusy, resetBusy);

			this._getDialog().close();
		}

	});
});