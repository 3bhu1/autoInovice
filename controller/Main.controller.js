/* global Tesseract:true */
sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'resources/tesseract'
	],function(Controller,tesseractjs){
		"use strict";
		return Controller.extend("controller.Main",{
		uploadc:function(evt)
		{
			 var f = evt.oSource.oFileUpload.files[0];  //here we will get the file which we have been selected in to the variable f
			 var path = URL.createObjectURL(f);     // here we are generating the URL based on the local file system and will pass the url in to path
			 window.myVar = path; //decalred global variable, attaching to window dom
			 var img = sap.ui.getCore().byId("img"); // we are getting the id of the image
	         img.setSrc(path);  //we are setting the source of the path to the image to display the image
	         var processBtn = sap.ui.getCore().byId("processBtn");
	         processBtn.setVisible(true);
		},
		onProcess:function(evt)
		{
		     Tesseract.recognize(window.myVar)
		         .then(function(result2) {
		         	var invoice = sap.ui.getCore().byId("invoice"); //invoice #
		         	var inDate = sap.ui.getCore().byId("inDate"); //invoice date
		         	var str = result2.text; 
		         	var nPos = str.search("Invoice Number"); //invoice# position
		         	var inDPos = str.search("Invoice Date"); //invoice date position
		         	invoice.setValue(str.substr(nPos+15,4));
		         	inDate.setValue(str.substr(inDPos+13,11));
		         	var rBox = sap.ui.getCore().byId("rBox");
	        		rBox.setVisible(true); //make it visible
		         	var inbox = sap.ui.getCore().byId("inbox");
	        		inbox.setVisible(true); //make it visible
		            var res = sap.ui.getCore().byId("result");
		                     res.setText(result2.text);
		         }); 			
		}
		});
	});