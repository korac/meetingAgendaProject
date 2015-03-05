var actDisplayController = function (view, model, activity) {

	console.log("actDisplayController run!");

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

    $ ('#saveButton').click(function() {
    	$('#li').append(activity.getName());

    });

}