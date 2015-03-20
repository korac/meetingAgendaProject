var ActivityEditView = function (container, model,selectedActivity,day){

	model.addObserver(this);
    this._container = container;
    this._model = model;

    var _this = this;

   // this.formbody = this._container.find(".form-horizontal");
    this.changeName = this._container.find("#changeName");
    this.changeLength = this._container.find("#changeLength");
    this.changeType = this._container.find("#changeType");
    this.changeDescription = this._container.find("#changeDescription");
    this.editSaveButton = this._container.find("#editSaveButton");

	this.update = function() {
			//this.formbody.empty();
			//console.log(selectedActivity.getName());
            this.changeName.val(selectedActivity.getName());
            this.changeLength.val(selectedActivity.getLength());
            this.changeType.val(selectedActivity.getType());
            this.changeDescription.val(selectedActivity.getDescription());
	}
	    this.update();

}

