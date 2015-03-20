   /**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityController = function (view, model) {

    this._view = view;
    this._model = model;

    var _this = this;

    var temporaryType;
  
    this._view.inputType.change(function(){
      
        switch(_this._view.inputType.val()){

            case "Presentation": temporaryType = 0; break;
            case "Group work": temporaryType = 1; break;
            case "Discussion": temporaryType = 2; break;
            case "Break": temporaryType = 3; break;

        }
    });

    $('#addActivityCancelButton').on('click', function() {
        //console.log("Clicked saveButton to change view to MainView");
        $(".page").hide();
        $("#MainView").show();
        $('#addActBtn').removeClass('active');

            $('#inputName').val('');
            $('#inputLength').val(1);
            $('#inputType').val('');
            $('#inputDescription').val('');

            $('#inputName').removeClass("error");
            $('#newActNameValInfo').text("*");
            $('#newActNameValInfo').removeClass("error");

            $('#inputType').removeClass("error");
            $('#newActTypeValInfo').text("*");
            $('#newActTypeValInfo').removeClass("error");

            $('#inputDescription').removeClass("error");
            $('#newActDescrValInfo').text("*");
            $('#newActDescrValInfo').removeClass("error");

            $('#addActivityCancelButton').removeClass('active');
    });

    this._view.saveButton.on('click', function() {
       /*_this._activity.setName(_this._view.inputName.val());
        _this._activity.setLength(_this._view.inputLength.val());
        _this._activity.setTypeId(temporaryType);
        _this._activity.setDescription(_this._view.inputDescription.val());*/
            $('#inputName').removeClass("error");
            $('#newActNameValInfo').text("*");
            $('#newActNameValInfo').removeClass("error");

            $('#inputType').removeClass("error");
            $('#newActTypeValInfo').text("*");
            $('#newActTypeValInfo').removeClass("error");

            $('#inputDescription').removeClass("error");
            $('#newActDescrValInfo').text("*");
            $('#newActDescrValInfo').removeClass("error");

        if ($('#inputName').val()        != "" &&
            $('#inputLength').val()      != "" &&
            $('#inputType').val()        != "" &&
            $('#inputDescription').val() != "") {

        $("#addActivityView").hide();
        $("#MainView").show();

        var activity = new Activity(_this._model, _this._view.inputName.val(), parseInt(_this._view.inputLength.val()), temporaryType, _this._view.inputDescription.val());

        _this._model.addParkedActivity(activity);


        console.log(_this._model.parkedActivities[0].getName());
        $('#inputLength').val(1);
        $('#addActBtn').removeClass('active');
        
        return true ;

        }else {

            if ($('#inputName').val() === "") {
                $('#inputName').addClass("error"); // adding css error class to the control
                $('#newActNameValInfo').text(" Please enter a Name.");//filling up error message
                $('#newActNameValInfo').addClass("error");//add error class to info span
            }

            if ($('#inputType').val() === "") {
                $('#inputType').addClass("error"); // adding css error class to the control
                $('#newActTypeValInfo').text(" Please choose a Type.");//filling up error message
                $('#newActTypeValInfo').addClass("error");//add error class to info span
            }

            if ($('#inputDescription').val() === "") {
                $('#inputDescription').addClass("error"); // adding css error class to the control
                $('#newActDescrValInfo').text(" Please enter a description.");//filling up error message
                $('#newActDescrValInfo').addClass("error");//add error class to info span
            }

        $("#addActivityView").show();
        $("#MainView").hide();
 //       console.log(_this._model.parkedActivities[0]);
            return false;
        };
    });

/*
        if( ($('#inputName').val()!= "") && ($('#inputLength').val()!= "") && ($("#inputDescription").val()!="") )
        {   
            if (view.currentActivity != null)
            {
                view.currentActivity.setName($('#inputName').val());
                view.currentActivity.setLength($('#inputLength').val());
                view.currentActivity.setTypeId($('#temporaryType')).index();
                view.currentActivity.setDescription($("#inputDescription").val());
            }
            else    
            {
                model.addParkedActivity(new Activity($('#inputName').val(),($('#inputLength').val()),($('#inputType')).index(),$("#inputDescription").val()));
            }
            
        }
        else
        {
            alert('Please fill out all the fields.');
        }
         */
   
   
}