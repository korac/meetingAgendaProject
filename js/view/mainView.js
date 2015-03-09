
var MainView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


    this.addDayBtn = this._container.find("#addDayBtn");
    this.draggedAct = this._container.find("#drag0");
    this.dragTarget = this._container.find("#Schedule");

    this.update = function () {
       
        
    }

}