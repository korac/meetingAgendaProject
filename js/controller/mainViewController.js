var MainViewController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;


    this._view.addDayBtn.on("click", function(){

       // var day = new Day(8,0);
        model.addDay();
        console.log(_this._model.days);
        console.log('#days = ' + model.days.length);
    });



}