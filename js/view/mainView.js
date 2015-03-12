
var MainView = function (container, model, day) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


    this.addDayBtn = this._container.find("#addDayBtn");
    this.draggedAct = this._container.find("#drag0");
    this.dragTarget = this._container.find("#schedule");

    this.update = function () {
        console.log(this._model.parkedActivities);
        
    }
this.update();
}