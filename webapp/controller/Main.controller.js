sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.example.task1.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("com/example/task1/Mockdata/KPIData.json"));
		        this.getView().setModel(oModel);

                var oModelIFA = new JSONModel(sap.ui.require.toUrl("com/example/task1/Mockdata/IFAData.json"));
		        this.getView().setModel(oModelIFA);
                
            },
            	handleTableSelectDialogPress: function (oEvent) {
                var oButton = oEvent.getSource(),
                    oView = this.getView();
    
                if (!this._pDialog) {
                    this._pDialog = Fragment.load({
                        id: oView.getId(),
                        name: "com.example.testapp.view.Y2D",
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
    
                this._pDialog.then(function(oDialog){
                    this._configDialog(oButton, oDialog);
                    oDialog.open();
                }.bind(this));
            },
    
            handleRowClick: function(oEvent) {
                
                var demoToast = this.getView().byId("demoToast");
                demoToast.setText("Event rowClick fired.");
                demoToast.show();
            },
            handleSelectionChange: function(oEvent) {
                var demoToast = this.getView().byId("demoToast");
                demoToast.setText("Event selectionChange fired.");
                demoToast.show();
            }
        });
    });
