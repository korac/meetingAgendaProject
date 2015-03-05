
var actDisplayView = function (container, model, activity) {

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._activity = activity;
    this.activityName;
    var listbody = $('#activityList');
    var activityName;
    
    this.update = function (arg) {

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