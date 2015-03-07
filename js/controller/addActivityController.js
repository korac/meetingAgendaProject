    /**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityController = function (view, model) {

    this._view = view;
    this._model = model;

    var _this = this;

    var temporaryType;
  
    this._view.inputType.change(function(){
        console.log("changed!");
        switch(_this._view.inputType.val()){

            case "Presentation": temporaryType = 0; break;
            case "Group work": temporaryType = 1; break;
            case "Discussion": temporaryType = 2; break;
            case "Break": temporaryType = 3; break;

        }
    });


    this._view.saveButton.on('click', function() {
  /*      _this._activity.setName(this._view.inputName.val());
        _this._activity.setLength(this._view.inputLength.val());
        _this._activity.setTypeId(temporaryType);
        _this._activity.setDescription(this._view.inputDescription.val());*/


        var activity = new Activity(_this._model, _this._view.inputName.val(), _this._view.inputLength.val(), temporaryType, _this._view.inputDescription.val());

        _this._model.addActivity(activity);

        console.log(_this._model.parkedActivities[0].getName());



	});
    
}