/**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

    $('#saveButton').on('click', function() {
        _this._activity.setName($("#inputName").val());
        _this._activity.setLength($("#inputLength").val());
	});
}