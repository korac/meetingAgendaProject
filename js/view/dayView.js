
var DayView = function (container, model, day) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    
    this.totalLength = this._container.find("#totalLength");
    this.connectedSortable = this._container.find(".connectedSortable");

    //prevents the dayview container from blocking when smth is dragged over it
 
    this.update = function () {

        this.connectedSortable.empty();

        for(var i = 0; i < this._model.days.length; i++) {
             this.connectedSortable.attr('day',i);
             this.connectedSortable.attr('position',i);
             this.connectedSortable.attr('id',i);

            for (var j = 0; j < this._model.days[i]._activities.length; j++){
                // activity box div
                var activityBoxDiv = $('<div>');
                activityBoxDiv.addClass('activityBox');
                activityBoxDiv.attr('day',i);
                activityBoxDiv.attr('position',j);

                //activity div
                var activityDiv = $('<div>');
                activityDiv.addClass('row');
                activityDiv.addClass('list-group-item dayActivity');
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

                this.connectedSortable.append(activityBoxDiv);    
            }
        }



//Test start
        $('#dayView').empty();

        var itemOutput  =   '<div class="col-md-6 col-md-offset-2">'
            itemOutput +=   'Start Time:'
            itemOutput +=   '<p>'
            itemOutput +=   '<input type="time" class="form-control" id="startTime" value="08:00">'
            itemOutput +=   '</p>'
            itemOutput +=   '<p>End Time: VarEndTime</p>'
            itemOutput +=   '<p>Total Length:<a id="totalLength"></a> min</p>'
            itemOutput +=   '</div>'
            itemOutput +=   '<div class="col-md-2">'
            itemOutput +=   '<div class="stroke"></div>'
            itemOutput +=   '<div class="progress" id="percentage">'
            itemOutput +=   '<div class="progress-bar progress-bar-success" id="discussionPercentage" style="width: 0%">'
            itemOutput +=   '<span class="sr-only">(discussion)</span>'
            itemOutput +=   '</div>'
            itemOutput +=   '<div class="progress-bar progress-bar-danger" id="groupworkPercentage" style="width: 0%">'
            itemOutput +=   '<span class="sr-only">(groupwork)</span>'
            itemOutput +=   '</div>'
            itemOutput +=   '<div class="progress-bar progress-bar-info" id="presentationPercentage" style="width: 0%">'
            itemOutput +=   '<span class="sr-only">(presentation)</span>'
            itemOutput +=   '</div>'
            itemOutput +=   '<div class="progress-bar progress-bar-warning" id="breakPercentage" style="width: 0%">'
            itemOutput +=   '<span class="sr-only">(break)</span>'
            itemOutput +=   '</div>'
            itemOutput +=   '</div>'
            itemOutput +=   '</div>'
            itemOutput +=   '<div class="row">'
            itemOutput +=   '<div class="col-md-8 col-md-offset-2" id= "dayBox">'
            itemOutput +=   '<div class="connectedSortable" ondragover="return false">'
            itemOutput +=   '</div>'
            itemOutput +=   '</div>'
            itemOutput +=   '</div>'

        $('#dayView').append(itemOutput);
//Test end

};
    //this.totalLength.append(model.days[0].getTotalLength());

    this.update();
}
