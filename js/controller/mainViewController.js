var MainViewController = function (view, model) {

    this._view = view;
    this._model = model;


    var _this = this;
    var _newDayDate = "March 15";
    var _newDayName = "Meeting";



    this._view.addDayBtn.on("click", function(event){
        var day = new Day(8,0);
        _this._model.addDay(day);
            //alert("Here is a Datepicker!");
            //console.log(_this._model.days);
            //$('<button type="button" class="btn btn-lg btn-default" id="dayButton">'+ _newDayDate +'<br>'+ _newDayName +'</button>').appendTo('#scheduleView');
            //event.preventDefault();

    });

/*
    this._view.dragTarget.attr( "ondrop", "drop(event)");
    this._view.dragTarget.attr("ondragover","return false");
    
    this.drag = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    
    this.drop = function(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    
        console.log(data);
    };
    
    this.handleDragStart = function(e){
        //won't work because of "this"
        // maybe use e.target
        this.style.opacity  = '0.4';
    };
    
    this._view.draggedAct.addEventListener('dragstart',this.handleDragStart, false);*/

/*
    this._view.dragTarget.addEventListener('drop', function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        event.target.appendChild(document.getElementById(data));
    }, false);*/





}