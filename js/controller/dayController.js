var MainViewController = function (view, model, activity) {
/**
 * Created by Jonathan, Mar. 6th
 */
    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

	$('#dayView').keyup(function() {
		model._start($("#startTime").val());
		console.log("input smth");
	});

}