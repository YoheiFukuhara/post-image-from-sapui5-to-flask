/*eslint-disable no-console, no-alert, */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.post-image-to-flask.controller.post", {
/*		fileUploadChange: function (oControlEvent) {
			console.log("changed");
		},*/
		fileUploadComplete: function (oControlEvent) {

			console.log("response from CF flask API:", oControlEvent.getParameters().responseRaw);
			alert(oControlEvent.getParameters().responseRaw);
		},

	});
});