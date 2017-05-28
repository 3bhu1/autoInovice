//sap.ui.controller("view.Main",{
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.View1
*/
/*	onInit: function() {

	},
	uploadc:function(evt)
	{
		 var f = evt.oSource.oFileUpload.files[0];  //here we will get the file which we have been selected in to the variable f
		 var path = URL.createObjectURL(f);     // here we are generating the URL based on the local file system and will pass the url in to path
		 var img = sap.ui.getCore().byId("img"); // we are getting the id of the image
         img.setSrc(path);  //we are setting the source of the path to the image to display the image
         //jQuery.sap.registerModulePath("Tesseract", "https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/tesseract.js");
         //var Tesseract = jQuery.sap.require("tesseract.js");
         //var Tesseract = jQuery.sap.includeScript("https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/tesseract.js");
	     Tesseract.recognize(path)
	         .then(function(result) {
	            var res = sap.ui.getCore().byId("result");
	                    res.text(result.text);
	         }).progress(function(result) {
	            var sta = sap.ui.getCore().byId("status");
	                    sta.text(result["status"] + " (" +
	                        (result["progress"] * 100) + "%)");
	        });         
	}
});*/
sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'autoInvoice/resources/tesseract'
	],function(Controller,tesseract){
		"use strict";
		return Controller.extend("autoInvoice.controller.Main",{
		uploadc:function(evt)
		{
			 var f = evt.oSource.oFileUpload.files[0];  //here we will get the file which we have been selected in to the variable f
			 var path = URL.createObjectURL(f);     // here we are generating the URL based on the local file system and will pass the url in to path
			 var img = sap.ui.getCore().byId("img"); // we are getting the id of the image
	         img.setSrc(path);  //we are setting the source of the path to the image to display the image
	         //jQuery.sap.registerModulePath("Tesseract", "https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/tesseract.js");
	         //var Tesseract = jQuery.sap.require("tesseract.js");
	         //var Tesseract = jQuery.sap.includeScript("https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/tesseract.js");
		     tesseract().recognize(path)
		         .then(function(result) {
		            var res = sap.ui.getCore().byId("result");
		                    res.text(result.text);
		         }).progress(function(result) {
		            var sta = sap.ui.getCore().byId("status");
		                    sta.text(result["status"] + " (" +
		                        (result["progress"] * 100) + "%)");
		        });         
		}			
		});
	});