sap.ui.jsview("view.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.View1
	*/ 
	getControllerName : function() {
		return "controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.View1
	*/ 
	createContent : function(oController) {
	    var myHeader = new sap.m.OverflowToolbar({
			content:[
			new sap.m.Button({
				icon:"sap-icon://menu2"
			}),
			new sap.m.ToolbarSpacer({
				
			}),
			new sap.m.Title({
				text: "Auto Invoice Processing using OCR(Optical Character Recognition)"
			}),
			new sap.m.ToolbarSpacer({
				
			}),
			new sap.m.MenuButton({
				text: "Tribhuwan",
				icon: "sap-icon://person-placeholder"
			}),
			new sap.m.Button({
				icon: "sap-icon://log",
				type: sap.m.ButtonType.Reject
			})
			]
		});
		var oGrid = new sap.ui.layout.Grid({
			defaultSpan: "XL4 L4 M4 S12",
			position: "Center",
			content: [
			new sap.m.FlexBox({
				width: "95%",
				height: "100%",
				direction: "Column",
				items:[
				new sap.ui.unified.FileUploader("myupload",{
					width: "100%",
	    			placeholder:"Upload Invoice",
	    			buttonText: "Upload",
					uploadOnChange: true,
					uploadComplete:[oController,oController.uploadc]
				 }),
				new sap.m.Image("img",{width:"100%"}),
				new sap.m.Button("processBtn",{text: "Process Inovice", visible: false, press:[oController,oController.onProcess]})
					]
			}),
			new sap.m.FlexBox("rBox",{
				width: "100%",
				visible: false,
				direction: "Column",
				items:[
				new sap.m.Text("result",{
				}),
				new sap.m.Button("updateBtn",{text: "Update", visible: false, press:[oController,oController.onUpdate]})
					]
			}),
			new sap.m.FlexBox("inbox",{
				width: "100%",
				visible: false,
				direction: "Column",
				items:[
				new sap.m.Label({
					text: "Invoice #"
				}),
				new sap.m.Input("invoice",{
					//editable: false,
					placeholder: "Invoice #"
				}),				
				new sap.m.Label({
					text: "Invoice Date"
				}),
				new sap.m.Input("inDate",{
					//editable: false,
					placeholder: "Invoice Date"
				})
				]
			})
			]
		});
		
		var oFootBar = new sap.m.OverflowToolbar({
			height: "auto",
			content: [
				new sap.m.Image({
					 height: '7%',
					 width: '7%',
					 src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2000px-SAP_2011_logo.svg.png',
					 layoutData: [
						new sap.m.OverflowToolbarLayoutData({
							priority: sap.m.OverflowToolbarPriority.AlwaysOverflow
						})
					 ]
				 }),
				 new sap.m.ToolbarSpacer(),
				new sap.m.Label({
					 text: 'Developed By | Tribhuwan Pant',
					 layoutData: [
						new sap.m.OverflowToolbarLayoutData({
							priority: sap.m.OverflowToolbarPriority.NeverOverflow
						})
					 ]
				 }),
				new sap.m.ToolbarSpacer(),
				new sap.m.Image({
					 height: '11%',
					 width: '11%',
					 src: 'https://sapui5.hana.ondemand.com/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png',
					 layoutData: [
						new sap.m.OverflowToolbarLayoutData({
							priority: sap.m.OverflowToolbarPriority.NeverOverflow
						})
					 ]
				 })
			]
		});
		return new sap.m.Page({
			// title: "{/Name}",
			showFooter: true,
			customHeader:[
				myHeader
			],
			content: [
				oGrid,
				oFootBar
			],
			footer:[
					
			]
		});
	}
});