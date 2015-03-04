/**
 * Created by Jonathan on 4.3.2015..
 */
var MainController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

	$(".page").hide();
	$("#addActivityView").show();


    $('#saveButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});

	$('#addActivityCancelButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});


 	$('#addActBtn').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#addActivityView").show();
	});

/*
  	$('#').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#M").show();
	});

    $('#').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#M").show();
	});*/
}