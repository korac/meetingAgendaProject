
var DayView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    this.dayActivities = this._container.find("#schedule");

    this.update = function () {

        this.dayActivities.empty();

        for(var i = 0; i < this._model.days[0]._activities.length; i++)
        {



            var htmlCode = '<li  id="drag'
            + i + '" class="list-group-item '
            + '" draggable="true"  ondragstart="drag(event)">'
            + _this._model.days[0]._activities[i].getLength()
            + " min" + "  |   "
            + _this._model.days[0]._activities[i].getName() + '</a></li>';

            console.log(htmlCode);

            this.dayActivities.append(htmlCode);

        }


    }
    this.update();
}