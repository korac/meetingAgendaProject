var ActivityEditController = function (view, model, activity) {

    this._view = view;
    this._model = model;

    var _this = this;

    var newName;
        var newLength; 
        var newType;
        var newDescription;

        var temporaryType;

        temporaryType = _this._view.oldactType;
        
        _this._view.changeType.change(function(){
          
            switch(_this._view.changeType.val()){

                case "Presentation": temporaryType = 0; break;
                case "Group work": temporaryType = 1; break;
                case "Discussion": temporaryType = 2; break;
                case "Break": temporaryType = 3; break;

            }
        });    

    view.editSaveButton.on('click', function() {

        
        
        if(_this._view.oldactName != _this._view.changeName.val()){
            newName = _this._view.changeName.val();
        }else{
            newName = _this._view.oldactName;
        }
        
        if(_this._view.oldactLength != _this._view.changeLength.val()){
            newLength = _this._view.changeLength.val();
        }else{
            newLength = _this._view.oldactLength;
        }

        if(_this._view.oldactType != _this._view.changeType.val()){
            newType = _this._view.changeType.val();
        }else{
            newType = _this._view.oldactType;
        }

        if(_this._view.oldactDescription != _this._view.changeDescription.val()){
            newDescription = _this._view.changeDescription.val();
        }else{
            newDescription = _this._view.oldactDescription;
        }
		var editedActivity = new Activity(_this._model, newName, parseInt(newLength), temporaryType, newDescription);
		console.log(newName);		
		console.log(newLength);
		console.log(editedActivity.getType());
		console.log(editedActivity.getDescription());
		//selectedActivity = editedActivity;
        _this._model.editParkedActivity(activity, editedActivity);

        $('#editSaveButton').removeClass('active');
    });

}