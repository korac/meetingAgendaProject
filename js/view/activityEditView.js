var ActivityEditView = function (container, model){


    this._container = container;
    this._model = model;

    var _this = this;

    this.changeName = this._container.find("#changeName");
    this.changeLength = this._container.find("#changeLength");
    this.changeType = this._container.find("#changeType");
    this.changeDescription = this._container.find("#changeDescription");
    this.editSaveButton = this._container.find("#editSaveButton");

	this.update = function() {
			var i = $(this).attr('id');
			console.log(i.val());
			if(i == target.id){
			var actname = document.getElementById("changeName");
			view.currentActivity.setName($('#inputName').val());

			//var actlength = document.getElementById("changeLength");
			//actlength.value = _this._model.parkedActivities[0].getLength();

			var acttype = document.getElementById("changeType");
			acttype.value = 12312312313;

			var actdescription = document.getElementById("changeDescription");
			actdescription.value = _this._model.parkedActivities[i].getDescription();

			}
	}
}

