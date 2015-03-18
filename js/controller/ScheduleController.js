/**
 * Created by Jonathan on 8.3.2015.
 */

var ScheduleController = function (view, model, day) {



    this._view = view;
    this._model = model;


    var _this = this;
    var dayIDGenerator = 0;
    var dayButtons = {};


// By clicking the "+ Add Day"-Button, a modal window is opened, which
// lets the user put in a date and name for the new day.
	$('#addDayBtn').on('click', function() {
      $("#newDayName").val('');
      $("#newDayDate").val('');
      $("#newDayTime").val('');
		  $("#newDayModal").modal("show");
	});


// Here, the code populates the chedule on the right side with a new
// button, showing the text "Date" and "Name". The button is to be clicked
// later on to toggle the view of this particular day. If closed, all is dismissed.
	$('#saveNewDate').on("click", function(event){
          //console.log($('#newDayDate').val());
          //console.log("button clicked");
          //removing any error messages/classes
            $('#newDayDate').removeClass("error");
            $('#newDayDateInfo').text("*");
            $('#newDayDateInfo').removeClass("error");

            $('#newDayName').removeClass("error");
            $('#newDayNameInfo').text("*");
            $('#newDayNameInfo').removeClass("error");


            $('#newDayTime').removeClass("error");
            $('#newDayTimeInfo').text("*");
            $('#newDayTimeInfo').removeClass("error");
      //If everything is alright, add the day button to the list
        if ($('#newDayName').val() != "" && $('#newDayDate').val() != "" && $('#newDayTime').val() != "") {
            $("#newDayModal").modal("hide");
      //generating the button and its functionality
            $('<button type="button" class="btn btn-lg btn-default dayButton">'+ $("#newDayName").val()
              +'<br>'+ $("#newDayDate").val() +'</button>').attr("id", "day" + dayIDGenerator++).appendTo('.btn-group-vertical');
            
            $('#addDayBtn').removeClass('active');
      //connecting the button to the freshly added day in the day array
            model.addDay();

      //assign id of days to the button
            //idOfdays = mode.days.lenght+1
            
            event.preventDefault();
            return true ;
      //if something's missing, set an error message
          }else{

              if ($('#newDayDate').val() === "") {
                     $('#newDayDate').addClass("error"); // adding css error class to the control
                     $('#newDayDateInfo').text(" Please choose a date.");//filling up error message
                     $('#newDayDateInfo').addClass("error");//add error class to info span
               }

              if ($('#newDayName').val() === "") {
                     $('#newDayName').addClass("error"); // adding css error class to the control
                     $('#newDayNameInfo').text(" Please enter a name.");//filling up error message
                     $('#newDayNameInfo').addClass("error");//add error class to info span
               }

               if ($('#newDayTime').val() === "") {
                     $('#newDayTime').addClass("error"); // adding css error class to the control
                     $('#newDayTimeInfo').text(" Please enter a start time.");//filling up error message
                     $('#newDayTimeInfo').addClass("error");//add error class to info span
               }
            return false;
        };
    });
//If the modal is closed with the close button, error message is being discarded
    $('#closeNewDate').on('click', function() {
            $('#newDayName').removeClass("error");
            $('#newDayNameInfo').text("*");
            $('#newDayNameInfo').removeClass("error");

            $('#newDayDate').removeClass("error");
            $('#newDayDateInfo').text("*");
            $('#newDayDateInfo').removeClass("error");

            $('#newDayTime').removeClass("error");
            $('#newDayTimeInfo').text("*");
            $('#newDayTimeInfo').removeClass("error");

            $('#addDayBtn').removeClass('active');
    });

}





