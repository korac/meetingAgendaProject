var ActivityEditController = function (view, model, activity) {

    this._view = view;
    this._model = model;

    var _this = this;

    var temporaryType;
  
    this._view.changeType.change(function(){
      
        switch(_this._view.changeType.val()){

            case "Presentation": temporaryType = 0; break;
            case "Group work": temporaryType = 1; break;
            case "Discussion": temporaryType = 2; break;
            case "Break": temporaryType = 3; break;

        }
    });

    view.editSaveButton.on('click', function() {
		var editedActivity = new Activity(_this._model, _this._view.changeName.val(), parseInt(_this._view.changeLength.val()), temporaryType, _this._view.changeDescription.val());
		console.log(editedActivity.getName());		
		console.log(editedActivity.getLength());
		console.log(editedActivity.getType());
		console.log(editedActivity.getDescription());
		//selectedActivity = editedActivity;
        _this._model.editParkedActivity(activity, editedActivity);

        $('#editSaveButton').removeClass('active');
    });

}