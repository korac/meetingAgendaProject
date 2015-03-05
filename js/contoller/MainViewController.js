var MainViewController = function (view, model, activity) {

	console.log("mainController running!");

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

     $ ('#saveButton').click(function() {
    	$('#activityName').append(activity.getName());
    	$('#activityTime').append(activity.getLength());


    });

}