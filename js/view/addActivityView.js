/**
 * Created by Kristijan on 3.3.2015..
 */
var AddActivityView = function (container, model, activity) {

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._activity = activity;

    this.inputName = this._container.find("#inputName");
    this.inputLength = this._container.find("#inputLength");
    this.inputType = this._container.find("#inputType");
    this.inputDescription = this._container.find("#inputDescription");
    this.saveButton = this._container.find("#saveButton");
    
    this.update = function () {
        console.log(this._activity.getName());
        console.log(this._activity.getLength());
    }

}