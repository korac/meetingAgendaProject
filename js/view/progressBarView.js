/**
 * Created by Kristijan on 7.3.2015..
 */
var ProgressBarView = function(container, model, day){

    model.addObserver(this);

    this._container = container;
    this._model = model;
    this._day = day;
    var _this = this;

    var presentationLength = 0;
    var groupworkLength = 0;
    var discussionLength = 0;
    var breakLength = 0;

    this.update = function(){

       //this._container.empty();

      /*      var dayId = 0;
            for(var i=0; i<this._model.days.length; i++) {
              
                if (model.days[i] == this._model.currentDay){
                     dayId = i;
                }
            }   

    
            for (var j = 0; j < model.currentDay._activities.length; j++) {
                switch (model.currentDay._activities[j].getTypeId()) {
                    case 0:
                        presentationLength += model.currentDay._activities[j].getLength();
                        break;
                    case 1:
                        groupworkLength += model.currentDay._activities[j].getLength();
                        break;
                    case 2:
                        discussionLength += model.currentDay._activities[j].getLength();
                        break;
                    case 3:
                        breakLength += model.currentDay._activities[j].getLength();
                        break;
                }
            }

        
        console.log(presentationLength);*/

        //time = _this._model.days[0].getLengthByType(0)/_this._model.days[0].getLength() * 100;

     //   var htmlCode = '<div class="progress-bar progress-bar-success" id="discussionPercentage" style="width:'
       //     + time + '% "><span class="sr-only">25% Complete (discussion)</span></div>';

        //this._container.append(htmlCode);
    }
}