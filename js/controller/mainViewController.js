var MainViewController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;



    this._view.addDayBtn.on("click", function(){
        var day = new Day(8,0);
        _this._model.addDay(day);
        //console.log(_this._model.days);
        $('<button type="button" class="btn btn-lg btn-default" id="dayButton">Wednesday</button>').appendTo('#scheduleView');
    	});


}