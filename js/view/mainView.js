
var MainView = function (container, model, activity) {

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._activity = activity;


    this.addActBtn = this._container.find("#addActBtn");
    
    this.update = function () {
       
        
    }

}