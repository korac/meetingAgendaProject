var ParkedActivityView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;

    this.listbody = this._container.find("#activityList");
    this.connectedSortable1 = this._container.find(".connectedSortable1");
    this.deleteThis = this._container.find(".deleteThis");

    this.update = function () {

        this.listbody.empty();
        console.log(model.parkedActivities);
    if(model.parkedActivities.length > 0){
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

            var deleteSpan = $('<span>');
            deleteSpan.addClass('col-md-1');
            deleteSpan.addClass('glyphicon');
            deleteSpan.addClass('glyphicon-remove');
            deleteSpan.addClass('deleteThis');

            activityDiv.append(lengthSpan);
            activityDiv.append(nameSpan);
            activityDiv.append(deleteSpan);

           

            switch(_this._model.parkedActivities[i].getTypeId()){

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
           // console.log(i);
           // $(activityBoxDiv).mouseover(function(){
            //var showID = _this._model.parkedActivities[i].getDescription();
            //console.log(showID);
            //});
            
            activityBoxDiv.tooltip({
                    title: 'Description: ' + _this._model.parkedActivities[i].getDescription(),
                    placement:  'bottom'

            });

            this.listbody.append(activityBoxDiv);
        }
        
       
    }

    }
    this.update();
}
