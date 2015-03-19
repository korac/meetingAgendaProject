
var DayView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    
    this.totalLength = this._container.find("#totalLength");

    this.endTime = this._container.find("#endTime");

    this.connectedSortable = this._container.find(".connectedSortable");

    //prevents the dayview container from blocking when smth is dragged over it
 
    this.update = function () {

        this.connectedSortable.empty();
        this.totalLength.empty();
        this.endTime.empty();

        for(var i = 0; i < this._model.days.length; i++) {
             this.connectedSortable.attr('day',i);
             this.connectedSortable.attr('position',i);
             this.connectedSortable.attr('id',i);

            for (var j = 0; j < this._model.days[i]._activities.length; j++){

                
                $.each(ActivityType,function(index,type){
                console.log("Day '" + ActivityType[index] + "' Length: " +  model.days[i].getLengthByType(index) + " min");
                });
                console.log("Day Length: " + model.days[i].getTotalLength() + " min");
                
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
                lengthSpan.html(_this._model.days[i].getStart());
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
                        activityDiv.addClass('redBack'); break;
                    case 2:
                        activityDiv.addClass('greenBack'); break;
                    case 3:
                        activityDiv.addClass('yellowBack'); break;  
                }

       
                activityBoxDiv.append(activityDiv);


                this.connectedSortable.append(activityBoxDiv);    
            }
        
         this.totalLength.append(_this._model.days[i].getTotalLength());
        this.endTime.append(model.days[i].getEnd());
        console.log(model.days);
        }


    };
   //this.update();

    
  this.update();
}