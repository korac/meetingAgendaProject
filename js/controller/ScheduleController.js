/**
 * Created by Jonathan on 8.3.2015.
 */

var ScheduleController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;
	

    /*$('#addNewDay').on('click', function() {
		console.log("Clicked saveButton to change view to MainView");
		$("#newDayDate").show();
	});*/

	$('#addDayBtn').on('click', function() {
		console.log("Clicked button to add a day");
		$("#newDayDate").modal("show");
	});

}