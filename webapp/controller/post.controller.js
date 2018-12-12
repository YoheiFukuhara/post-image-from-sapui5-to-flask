/*eslint-disable no-console, no-alert, */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.post-image-to-flask.controller.post", {
		fileUploadComplete: function (oControlEvent) {

			// Close busy indicator
			this.oBusyIndicator.close();

			console.log("response from CF flask API:", oControlEvent.getParameters().responseRaw);
			var resultJson = JSON.parse(oControlEvent.getParameters().responseRaw);
			var aGoods = "";
			for (var i = 0; i < resultJson.result.length; i++) {
				console.log("Image Search result:", resultJson.result[i]);
				if (i === 0) {
					aGoods = resultJson.result[i];
				} else {
					aGoods = aGoods + ";" + resultJson.result[i];
				}
			}

			// get the response as JSON and process the results
/*			if (resultJson.result.length === 0) {
				MessageBox.show('該当する商品が見つかりませんでした');
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("goodsImage", {
					goods: aGoods
				});
			}*/
		},

	});
});