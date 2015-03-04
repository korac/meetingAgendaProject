
var actdisplayView = function (container, model, activity) {

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._activity = activity;
    
    this.update = function (arg) {

    	this.activityName(model.getName()) ;

    	for(var i=0; i< name.length; i++){
			var li = document.createElement('li');
		    li.innerHTML = name;
			li.id = "li";
		

  			li.appendChild(li);
        
    }





}