/**
 * Created by Jonathan on 4.3.2015..
 */
var MainController = function (container, model) {

    this._container = container;
    this._model = model;


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

 	$('#view').ready(function(){
    	$('#progress-bar').tooltip();
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