/**
 * Created by Jonathan on 4.3.2015..
 */
var MainController = function (container, model) {

    this._container = container;
    this._model = model;


    var _this = this;

	$(".page").hide();
	$("#MainView").show();
	$("#dayView").hide();
    $("#emptyDayView").show();



    $('#saveButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});

	$('#addActivityCancelButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
		$('#addActBtn').removeClass('active');
	});

 	$('#addActBtn').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#addActivityView").show();
	});


	//Get ID of a daybutton on click to trigger the right dayview
       $('#scheduleDayButtons').on('click','.dayButton',function () {
        var dayButtonID = $(this).attr('id');
        var dayId = parseInt(dayButtonID.substring('day'.length));
        model.loadDay(dayId);
        //Looks of the button
        $('.active').not($(this)).removeClass('active');
        $('.btn-warning').not($(this)).removeClass('btn-warning');
    	$(this).addClass('active');
    	$(this).addClass('btn-warning');
       });
	
    $('#editActivityCancelButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});

}