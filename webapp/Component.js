sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/training/model/models",
	"sap/ui/model/odata/v4/ODataModel"
], function(UIComponent, Device, models, ODataModel) {
	"use strict";

	return UIComponent.extend("sap.training.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// var oModel = new ODataModel({
			// 	serviceUrl: "/ODATA_ORG/TripPinRESTierService/(S(44nbzk0kapmsdmankuj0auq0))/",
			// 	synchronizationMode: 'None'
			// });
			// oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			// this.setModel(oModel);
			
			// this.getModel().setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});