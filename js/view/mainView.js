
var MainView = function (container, model) {

    model.addObserver(this);

    this._container = container;
    this._model = model;

 this.rightbox = container.find("#rightbox");
      this.addDayBtn = this._container.find("#addDayBtn");


    this.update = function () {
       
        
        
       //this.rightbox.empty();
//this is adding the box but it is not visible for some reason,
        for (var i = 0; i < model.days.length; i++)
        {

            var dayDiv = $("<div>");
            dayDiv.addClass('row');

            var dayView = new DayView(dayDiv, model, model.days[i]);
            var dayController = new DayController(dayView, model, model.days[i]);

            this.rightbox.append(dayDiv);
        }
    }
	 this.update();
	
}