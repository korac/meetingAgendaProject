
var MainView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


    this.addActBtn = this._container.find("#addActBtn");
    
    this.update = function () {
       
        
    }

}