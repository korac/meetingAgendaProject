var MainViewController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;
    var _newDayDate = "March 15";
    var _newDayName = "Meeting";



    this._view.addDayBtn.on("click", function(event){
        var day = new Day(8,0);
        _this._model.addDay(day);
        alert("Here is a Datepicker!");
        //console.log(_this._model.days);
        //confirm("please set the date of the new day here: [Datepicker]");
        $('<button type="button" class="btn btn-lg btn-default" id="dayButton">'+ _newDayDate +'<br>'+ _newDayName +'</button>').appendTo('#scheduleView');
        event.preventDefault();
    });
}