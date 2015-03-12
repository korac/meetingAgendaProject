var ParkedActivityView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;


    this.listbody = this._container.find("#activityList");
    this.acttip = this._container.find("#div");
     this.dayActivities = this._container.find("#schedule");
 this.parkedActivityView = this._container.find("ParkedActivityView");
this.connectedSortable = this._container.find(".connectedSortable");

 container.on("drop", function(e) {
        var draggable = e.originalEvent.dataTransfer.getData("draggable");
        $("#activityList").append($(draggable));
    });
    this.update = function () {

        console.log(this._model.parkedActivities);

        this.listbody.empty();

        for(var i = 0; i < this._model.parkedActivities.length; i++)
        {
            var colorClass;

            switch(_this._model.parkedActivities[i].getType()){

                case "Presentation": colorClass = "blueBack"; break;
                case "Group Work": colorClass = "greenBack"; break;
                case "Discussion": colorClass = "redBack"; break;
                case "Break": colorClass = "yellowBack"; break;

            }

            // new version in js
            var li = document.createElement("li");
            li.id = "drag" + i;
            li.className = "list-group-item parkedActivity " + colorClass;
            li.draggable = true;
            li.innerHTML = _this._model.parkedActivities[i].getLength()
            + " min" + "  |   "
            + _this._model.parkedActivities[i].getName();

            $(li).on("dragstart", function(e) {
                e.originalEvent.dataTransfer.setData("draggable", "#" + this.id);
            });

            this.listbody.append(li);

            /*

            var htmlCode = '<li  id="drag'
            + i + '" class="list-group-item parkedActivity '
            + colorClass + '" draggable="true"  ondragstart="drag(event)">'
            + _this._model.parkedActivities[i].getLength()
            + " min" + "  |   "
            + _this._model.parkedActivities[i].getName() + '</li>';


            

            this.listbody.append(htmlCode);
            */
            
            tip = '_this._model.parkedActivities[i].getName()';
            
            this.acttip.append(tip);



        }
        

       

        // Loop in not functioning because there is nothing in our "parkedActivities" array
        // Every activity we create should go to "parkedActivities" array
        // I believe then we cannot instantiate our "var act = new Activity(model)" in our "app.js"
        // Because we already create one activity by doing this "var act = new Activity(model);"
        // We need to figure this out how to create others
        /*activityName = activity.getName();

        for(var i=0; i< activityName.length; i++){
            var li = document.createElement('li');
            li.innerHTML = activityName;
            li.id = "li";
              ul.appendChild(li);
            listbody.append(ul);
        }*/
        
    }    

    this.update();


}