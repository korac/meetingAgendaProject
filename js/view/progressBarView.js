/**
 * Created by Kristijan on 7.3.2015..
 */
var ProgressBarView = function(container, model){

    model.addObserver(this);

    this._container = container;
    this._model = model;
    var _this = this;

    var presentationLength = 0;
    var groupworkLength = 0;
    var discussionLength = 0;
    var breakLength = 0;


    this.update = function(){

   /* var activities =
     //   this._container.empty();
    
            for (var j = 0; j < model.currentDay._activities.length; j++) {
                switch (_activities[j].getTypeId()) {
                    case 0:
                        presentationLength += activities[j].getLength();
                        break;
                    case 1:
                        groupworkLength += activities[j].getLength();
                        break;
                    case 2:
                        discussionLength += activities[j].getLength();
                        break;
                    case 3:
                        breakLength += activities[j].getLength();
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