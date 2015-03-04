var MainViewController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

    

    this._view.addActBtn.click(function(){
        alert("jump to addactivitypage.");
    });


}