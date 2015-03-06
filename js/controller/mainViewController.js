var MainViewController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

     $ ('#saveButton').click(function() {
    	$('#activityName').append(activity.getName());
    	$('#activityTime').append(activity.getLength());

    });
    
}