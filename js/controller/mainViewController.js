var MainViewController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;


    this._view.addDayBtn.on("click", function(){

        var day = new Day(8,0);
        _this._model.addDay(day);
    });


    //this._view.dragTarget.attr( "ondrop", "drop(event)");
    //this._view.dragTarget.attr("ondragover","return false");
    //
    //this.drag = function (ev) {
    //    ev.dataTransfer.setData("text", ev.target.id);
    //};
    //
    //this.drop = function(ev) {
    //    ev.preventDefault();
    //    var data = ev.dataTransfer.getData("text");
    //    ev.target.appendChild(document.getElementById(data));
    //
    //    console.log(data);
    //};
    //
    //this.handleDragStart = function(e){
    //    this.style.opacity  = '0.4';
    //};
    //
    //this._view.draggedAct.addEventListener('dragstart',this.handleDragStart, false);

/*
    this._view.dragTarget.addEventListener('drop', function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        event.target.appendChild(document.getElementById(data));
    }, false);*/


}