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

	
    $('#editActivityCancelButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});


    //$(document).find('.activityBox').on('dblclick', this, function(event) {
	$("#topBar").find('.container').on('dblclick', this, function(event) {
		console.log("fuck you");	
        //alert("clicked");
        //var selectedActivity = model.parkedActivities[selectedActivityIndex];
        //var activityEditView = new ActivityEditView($("ActivityEditView"), model, selectedActivity);
        //var activityEditController = new ActivityEditController(activityEditView, model, selectedActivity);
		$(".page").hide();       
        $("#ActivityEditView").show();
    });

}