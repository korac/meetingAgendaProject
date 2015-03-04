/**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

    console.log(this._view.inputName.value);

    $('#saveButton').on('click', function() {
        console.log(_this._view.inputName.value);
	});
}