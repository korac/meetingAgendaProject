
var DayView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    this.dayActivities = this._container.find("#schedule");
    this.totalLength = this._container.find("#totalLength");
    this.endTime = this._container.find("#endTime");

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
                // activity box div
                var activityBoxDiv = $('<div>');
                activityBoxDiv.addClass('parkedactivityBox');

                //activity div
                var activityDiv = $('<div>');
                activityDiv.addClass('row');
                activityDiv.addClass('list-group-item parkedActivity');
                activityDiv.id = "drag" + i;
                activityDiv.attr('draggable', true);

                // activity length
                var lengthSpan = $('<span>');
                lengthSpan.html(_this._model.days[i]._activities[j].getLength() + 'min');
                lengthSpan.addClass('col-md-3');

                // activity name
                var nameSpan = $('<span>');
                nameSpan.html(_this._model.days[i]._activities[j].getName());
                nameSpan.addClass('col-md-7');

                // append activity spans to activity div
                activityDiv.append(lengthSpan);
                activityDiv.append(nameSpan);

                $(activityBoxDiv).on("dragstart", function(e) {
                    e.originalEvent.dataTransfer.setData("draggable", "#" + this.id);
                });

                //color
                

                switch(_this._model.days[i]._activities[j].getTypeId()){

                    case 0:
                        activityDiv.addClass('blueBack'); break;
                    case 1:
                        activityDiv.addClass('greenBack'); break;
                    case 2:
                        activityDiv.addClass('yellowBack'); break;
                    case 3:
                        activityDiv.addClass('redBack'); break;  
                }

       
                activityBoxDiv.append(activityDiv);

                $(activityBoxDiv).mouseover(function(){
                        var showID = $(activityDiv.id);
                         //alert(showID);
                         //console.log(showID);
                });

                this.dayActivities.append(activityBoxDiv);    
            }
        }

    };
    this.totalLength.append(model.days[0].getTotalLength());
    this.endTime.append(model.days[0].getEnd());

    this.update();
}