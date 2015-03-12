var ParkedActivityView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;


    this.listbody = this._container.find("#activityList");
    this.acttip = this._container.find("#div");

    this.update = function () {

        console.log(model.parkedActivities);

        this.listbody.empty();
        for(var i = 0; i < model.parkedActivities.length; i++){

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
            lengthSpan.html(_this._model.parkedActivities[i].getLength() + 'min');
            lengthSpan.addClass('col-md-3');

            // activity name
            var nameSpan = $('<span>');
            nameSpan.html(_this._model.parkedActivities[i].getName());
            nameSpan.addClass('col-md-7');

            // append activity spans to activity div
            activityDiv.append(lengthSpan);
            activityDiv.append(nameSpan);

            $(activityBoxDiv).on("dragstart", function(e) {
                e.originalEvent.dataTransfer.setData("draggable", "#" + this.id);
            });

            //color
            

            switch(_this._model.parkedActivities[i].getTypeId()){

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
                     console.log(showID);
            });

            this.listbody.append(activityBoxDiv);
        }


           

            // Loop in not functioning because there is nothing in our "parkedActivities" array
            // Every activity we create should go to "parkedActivities" array
            // I believe then we cannot instantiate our "var act = new Activity(model)" in our "app.js"
            // Because we already create one activity by doing this "var act = new Activity(model);"
            // We need to figure this out how to create others
    }    
    this.update();
}