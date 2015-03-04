/**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityController = function (view, model, activity) {

    this._view = view;
    this._model = model;
    this._activity = activity;

    var _this = this;

    var temporaryType;

    console.log(this._view.inputType);

    $("#inputType").change(function(){
        console.log("changed!");
        if(_this._view.inputType.val() == "Presentation"){
            temporaryType = 0;
        }
        else if(_this._view.inputType.val() == "Discussion"){
            temporaryType = 1;
        }
        else if(_this._view.inputType.val() == "Group work"){
            temporaryType = 2;
        }
        else if(_this._view.inputType.val() == "Break"){
            temporaryType = 3;
        }
    });


    $('#saveButton').on('click', function() {
        _this._activity.setName($("#inputName").val());
        _this._activity.setLength($("#inputLength").val());
        _this._activity.setTypeId(temporaryType);
        _this._activity.setDescription($("#inputDescription").val());
	});
}