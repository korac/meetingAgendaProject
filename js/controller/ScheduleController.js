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
        $("#newDayName").val('');
        $("#newDayDate").val('');
		$("#newDayModal").modal("show");
	});




//Checking if field(s) are filled with values
    function validateName() {
        if ($('#newDayName').val() == "") {
              $('#newDayName').addClass("error"); // adding css error class to the control
              $('#newDayNameInfo').text("This field cannot be empty!");//filling up error message
              $('#newDayNameInfo').addClass("error");//add error class to info span
              return false;
        } else {
              $('#newDayName').removeClass("error");
              $('#newDayNameInfo').text("*");
              $('#newDayNameInfo').removeClass("error");
        }
    };

    function validateDate() {
        if ($('#newDayDate').val() == "") {
              $('#newDayDate').addClass("error"); // adding css error class to the control
              $('#newDayDateInfo').text("This field cannot be empty!");//filling up error message
              $('#newDayDateInfo').addClass("error");//add error class to info span
              return false;
        } else {
              $('#newDayDate').removeClass("error");
              $('#newDayDateInfo').text("*");
              $('#newDayDateInfo').removeClass("error");
        }
    };



// Here, the code populates the chedule on the right side with a new
// button, showing the text "Date" and "Name". The button is to be clicked
// later on to toggle the view of this particular day. If closed, all is dismissed.
	$('#saveNewDate').on("click", function(event){
        if (validateName()) {
          control.log("button clicked");
            $("#newDayModal").modal("hide");
            $('<button type="button" class="btn btn-lg btn-default" id="dayButton">'+ $("#newDayName").val() +'<br>'+ $("#newDayDate").val() +'</button>').attr("id", "day" + day++).appendTo('.btn-group-vertical');
            event.preventDefault();
            return(true);
        }else {
            $("#newDayModal").modal("show");
            return(false);
        };

    });

    $('#closeNewDate').on('click', function() {
            $('#newDayName').removeClass("error");
            $('#newDayNameInfo').text("*");
            $('#newDayNameInfo').removeClass("error");
            control.log(newDayDate.val());
    });

}