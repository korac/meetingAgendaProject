
var DayView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    this.dayActivities = this._container.find("#schedule");

    //prevents the dayview container from blocking when smth is draggedover it
    container.on("dragover", function(e) {
        e.preventDefault();
    });

    container.on("drop", function(e) {
        var draggable = e.originalEvent.dataTransfer.getData("draggable");
        $("#schedule").append($(draggable));
    });

    this.update = function () {

        this.dayActivities.empty();

        for(var i = 0; i < this._model.days.length; i++) {
            for (var j = 0; j < this._model.days[i]._activities.length; j++){

                var colorClass;

                switch(_this._model.days[i]._activities[j].getType()){

                    case "Presentation": colorClass = "blueBack"; break;
                    case "Group Work": colorClass = "greenBack"; break;
                    case "Discussion": colorClass = "redBack"; break;
                    case "Break": colorClass = "yellowBack"; break;

                }

                var htmlCode = '<li  id="drag'
                    + i + '" class="list-group-item '
                    + colorClass + '" draggable="true"  ondragstart="drag(event)">'
                    + _this._model.days[i]._activities[j].getLength()
                    + " min" + "  |   "
                    + _this._model.days[i]._activities[j].getName() + '</a></li>';

                this.dayActivities.append(htmlCode);

            }
        }

    };

    this.update();
}