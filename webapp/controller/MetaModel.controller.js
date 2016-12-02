sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.training.controller.MetaModel", {

		onInit: function() {
			var oMetaModel = this.getOwnerComponent().getModel().getMetaModel();

			var oPromise = oMetaModel.requestObject("/Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline");

			oPromise.then(function(result) {
				MessageToast.show(result);
			}, function(err) {
				console.log(err);
			});
		}

	});

});