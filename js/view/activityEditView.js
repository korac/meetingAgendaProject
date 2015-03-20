var ActivityEditView = function (container, model,selectedActivity,day){

	model.addObserver(this);
    this._container = container;
    this._model = model;

    var _this = this;
    this.oldactName = selectedActivity.getName();
    this.oldactLength = selectedActivity.getLength();
    this.oldactType = selectedActivity.getType();
    this.oldactDescription = selectedActivity.getDescription();
   // this.formbody = this._container.find(".form-horizontal");

   
    this.changeName = this._container.find("#changeName");
    this.changeLength = this._container.find("#changeLength");
    this.changeType = this._container.find("#changeType");
    this.changeDescription = this._container.find("#changeDescription");
    this.editSaveButton = this._container.find("#editSaveButton");

	this.update = function() {
			//this.formbody.empty();
			//console.log(selectedActivity.getName());
            this.changeName.val(this.oldactName);
            this.changeLength.val(this.oldactLength);
            this.changeType.val(this.oldactType);
            this.changeDescription.val(this.oldactDescription);
	}
	    this.update();

}

