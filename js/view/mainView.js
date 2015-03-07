
var MainView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


    this.addDayBtn = this._container.find("#addDayBtn");
    
    this.update = function () {
       
        
    }

}