/**
 * Created by Jonathan on 4.3.2015..
 */
var MainController = function (container, model) {

    this._container = container;
    this._model = model;


    var _this = this;

	$(".page").hide();
	$("#MainView").show();

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
         //console.log(model.days);

        //daybuttonID = "";
       });
}