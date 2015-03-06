var MainViewController = function (view, model, activity) {
/**
 * Created by Jonathan, Mar. 6th
 */
    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;
    var _startTime = model._start;

	$('#dayView').keyup(function() {
		_startTime($("#startTime").val());
		console.log("input smth");
	});

}