var ParkedActivityView = function (container, model, activity) {

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._activity = activity;

    var _this = this;

    //this.activityName;
    this.listbody = this._container.find("#activityList");

    var activityName;
    
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

             htmlCode = '<li class="list-group-item parkedActivity">'
            + _this._model.parkedActivities[i].getLength()
            + " min" + "  |   "
            + _this._model.parkedActivities[i].getName() + '</li>';



            this.listbody.append(htmlCode);
            $(".parkedActivity").addClass(colorClass);
             $(".parkedActivity").attr('draggable', true);

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



}