/**
 * Created by Jonathan on 3.3.2015..
 */
var MainController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

	$(".container").hide();
	//$("#Mainview").show();

    $('#saveButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#MainView").show();
	});

 	$('#').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#M").show();
	});

  	$('#').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#M").show();
	});

    $('#').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".container").hide();
		$("#M").show();
	});
}