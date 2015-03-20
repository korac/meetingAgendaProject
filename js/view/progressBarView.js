/**
 * Created by Kristijan on 7.3.2015..
 */
var ProgressBarView = function(container, model, day){

    model.addObserver(this);

    this._container = container;
    this._model = model;


    var _this = this;


    this.presentationBar = this._container.find("#presentationPercentage");
    this.groupworkBar = this._container.find("#groupworkPercentage");
    this.discussionBar = this._container.find("#discussionPercentage");
    this.breakBar = this._container.find("#breakPercentage");

    this.update = function(){

        this._container.empty();

        var dayId = $("#scheduleDayButtons .active").attr("id");
        console.log(dayId);
        for(var i = 0; i < _this._model.days.length; i++){
            var iday = "day" + i;
            if(iday === dayId){
                var day = _this._model.days[i];
            }
        }


        var totalLength = day.getTotalLength();
        console.log(totalLength);

        var presentationLength = day.getLengthByType(0);
        presentationLength /= totalLength;
        presentationLength *= 100;

        var groupworkLength = day.getLengthByType(1);
        groupworkLength /= totalLength;
        groupworkLength *= 100;

        var discussionLength = day.getLengthByType(2);
        discussionLength /= totalLength;
        discussionLength *= 100;

        var breakLength = day.getLengthByType(3);
        breakLength /= totalLength;
        breakLength *= 100;

        var discussionHtml = '<div class="progress-bar progress-bar-success" id="discussionPercentage" style="width: '
            + discussionLength + '%"><span class="sr-only">(discussion)</span></div>';

        var groupworkHtml = '<div class="progress-bar progress-bar-danger" id="groupworkPercentage" style="width: '
            + groupworkLength + '%"><span class="sr-only">(groupwork)</span></div>';

        var presentationHtml = '<div class="progress-bar progress-bar-info" id="presentationPercentage" style="width: '
            + presentationLength + '%"><span class="sr-only">(presentation)</span></div>';

        var breakHtml = '<div class="progress-bar progress-bar-warning" id="breakPercentage" style="width: '
            + breakLength + '%"><span class="sr-only">(break)</span></div>';

        this._container.append(discussionHtml);
        this._container.append(groupworkHtml);
        this._container.append(presentationHtml);
        this._container.append(breakHtml);

    }
}