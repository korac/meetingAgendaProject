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


	//add activity button, when clicked it hides the page and shows the addActivity page
 	$('#addActBtn').on('click', function() {
		$(".page").hide();
		$("#addActivityView").show();
	});


	//Get ID of a daybutton on click to trigger the right dayview
    $('#scheduleDayButtons').on('click','.dayButton',function () {
        var dayButtonID = $(this).attr('id');
        var dayId = parseInt(dayButtonID.substring('day'.length));
        $("#emptyDayView").hide();
        $("#dayView").show();
        model.loadDay(dayId);
        //Looks of the button
        model.setProperId(dayButtonID);
        $('.active').not($(this)).removeClass('active');
        $('.btn-warning').not($(this)).removeClass('btn-warning');
    	$(this).addClass('active');
    	$(this).addClass('btn-warning');

    });
	//when you press cancel on edit activity the current page hides and shows the main View
    $('#editActivityCancelButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});
    //when editSaveButton is clicked it hides the current page and shows the main view
	$('#editSaveButton').on('click', function() {
		//console.log("Clicked saveButton to change view to MainView");
		$(".page").hide();
		$("#MainView").show();
	});

	$('.connectedSortable').sortable();

}