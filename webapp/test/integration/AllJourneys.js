/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"test/post-image-to-flask/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test/post-image-to-flask/test/integration/pages/post",
	"test/post-image-to-flask/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test.post-image-to-flask.view.",
		autoWait: true
	});
});