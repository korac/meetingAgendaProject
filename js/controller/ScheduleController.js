/**
 * Created by Jonathan on 8.3.2015.
 */

var ScheduleController = function (view, model) {

    this._view = view;
    this._model = model;



    var _this = this;
    var day = 0;



// By clicking the "+ Add Day"-Button, a modal window is opened, which
// lets the user put in a date for the new day.
	$('#addDayBtn').on('click', function() {
		console.log("Clicked button to add a day");
		$("#newDayModal").modal("show");
	});

// Here, the code populates the chedule lit on the right side with a new
// button, showing the text "Date" and "Name". The button is to be clicked
// later on to toggle the view of this particular day.
	$('#saveNewDate').on("click", function(event){
    $("#newDayModal").modal("hide");
    $('<button type="button" class="btn btn-lg btn-default" id="dayButton">'+ $("#newDayName").val() +'<br>'+ $("#newDayDate").val() +'</button>').attr("id", "day" + day++).appendTo('.btn-group-vertical');event.preventDefault();


    });
}