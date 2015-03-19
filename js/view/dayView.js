
var DayView = function (container, model, day, view) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;
    
    this.totalLength = this._container.find("#totalLength");

    this.endTime = this._container.find("#endTime");

    this.connectedSortable = this._container.find(".connectedSortable");

    /*this.presentationBar = view._container.find("#presentationPercentage");
    this.groupworkBar = view._container.find("#groupworkPercentage");
    this.discussionBar = view._container.find("#discussionPercentage");
    this.breakBar = view._container.find("#breakPercentage");*/


    //prevents the dayview container from blocking when smth is dragged over it
 
    this.update = function() {

        if(this._model.currentDay != 0){
        this.connectedSortable.empty();
        this.totalLength.empty();
        this.endTime.empty();

            var dayId = 0;
            for(var i=0; i<this._model.days.length; i++) {
                this.totalLength.empty();
                this.endTime.empty();
                if (model.days[i] == this._model.currentDay){
                     dayId = i;
                }
            }   

          /*  for (var j = 0; j < this._model.days[i]._activities.length; j++){*/

                
                
            for (var j = 0; j < model.currentDay._activities.length; j++){

             $.each(ActivityType,function(index,type){
                console.log("Day '" + ActivityType[index] + "' Length: " +  model.currentDay.getLengthByType(index) + " min");
                });
                console.log("Day Length: " + model.currentDay.getTotalLength() + " min");
                

//                presentationBarWidth = parseInt(model.currentDay.getLengthByType(index)/model.currentDay.getTotalLength() * 100);
  //              console.log(presentationBar.val());

                // activitybox div
              //  console.log(_this._model.currentDay._activities[j].getName());
                var activityBoxDiv = $('<div>');
                activityBoxDiv.addClass('activityBox');
                activityBoxDiv.attr('day', dayId);
                activityBoxDiv.attr('position',j);

                //activity div
                var activityDiv = $('<div>');
                activityDiv.addClass('row');
                activityDiv.addClass('list-group-item dayActivity');
                activityDiv.attr('draggable', true);


                // activity length
                var lengthSpan = $('<span>');
                lengthSpan.html(_this._model.currentDay._activities[j].getLength() + 'min');
                lengthSpan.addClass('col-md-3');

                // activity name
                var nameSpan = $('<span>');
                nameSpan.html(_this._model.currentDay._activities[j].getName());
                nameSpan.addClass('col-md-7');

                // append activity spans to activity div
                activityDiv.append(lengthSpan);
                activityDiv.append(nameSpan);

                $(activityBoxDiv).on("dragstart", function(e) {
                    e.originalEvent.dataTransfer.setData("draggable", "#" + this.id);
                });

                //color
                

                switch(_this._model.currentDay._activities[j].getTypeId()){

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
        
        
        this.totalLength.append(this._model.currentDay.getTotalLength());
        this.endTime.append(this._model.currentDay.getEnd());

        //console.log(model.days);
        }


    };
   //this.update();

    
  this.update();
}



/*/Test start
        $('#dayView').empty();

        var itemOutput  =   '<div class="col-md-6 col-md-offset-2">'
            itemOutput +=   'Start Time:'
            itemOutput +=   '<p>'
            itemOutput +=   '<input type="time" class="form-control" id="startTime" value="08:00">'
            itemOutput +=   '</p>'
            itemOutput +=   '<p>End Time: EndTime</p>'
            itemOutput +=   '<p>Total Length:<a id="totalLength">'+model.getTotalLength+'</a> min</p>'
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

        $('#dayview').append(itemOutput);*/
//Test end

    //this.totalLength.append(model.days[0].getTotalLength());

  

   // this.totalLength.append(_this._model.days[0].getTotalLength());
    //this.endTime.append(model.days[0].getEnd());



