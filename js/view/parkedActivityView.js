var ParkedActivityView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;

    this.listbody = this._container.find("#activityList");
    this.connectedSortable1 = this._container.find(".connectedSortable1");

    this.update = function () {

        this.listbody.empty();
        for(var i = 0; i < model.parkedActivities.length; i++){

            var activityBoxDiv = $('<div>');
            activityBoxDiv.addClass('activityBox');
            activityBoxDiv.attr('position',i);
            activityBoxDiv.attr('id',i);

            var activityDiv = $('<div>');
            activityDiv.addClass('row');
            activityDiv.addClass('list-group-item parkedActivity');
            
            activityDiv.attr('draggable', true);

            var lengthSpan = $('<span>');
            lengthSpan.html(_this._model.parkedActivities[i].getLength() + 'min');
            lengthSpan.addClass('col-md-3');

            var nameSpan = $('<span>');
            nameSpan.html(_this._model.parkedActivities[i].getName());
            nameSpan.addClass('col-md-7');

            activityDiv.append(lengthSpan);
            activityDiv.append(nameSpan);

           

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

          //  $(activityBoxDiv).mouseover(function(){
          //         var showID = _this._model.parkedActivities[i].getDescription().val();
                     //alert(showID);
            //         console.log(showID.val());
          //  });

            activityBoxDiv.tooltip({
                title: 'Description: ' + _this._model.parkedActivities[i].getDescription(),
                //track:true,
                placement:  'bottom',
               
            });
            this.listbody.append(activityBoxDiv);
        }

    };
    this.update();
};