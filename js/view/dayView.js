
var DayView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;


     this.update = function () {

 var MainView = this._container.find("#MainView");	
    	// have to add aditional things here for it to work 
 		var dayView = this._container.find("#dayView");		
		MainView.append(dayView);
		var dayOverviewContainer = this._container.find("#dayOverviewContainer");		
		MainView.append(dayOverviewContainer);
		var dayOverview = this._container.find("#dayOverview");		
		MainView.append(dayOverview);
	var activityBox = this._container.find("#activityBox");
		MainView.append(activityBox);


    }
this.update();


}