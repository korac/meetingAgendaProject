/**
 * Created by Kristijan on 7.3.2015..
 */
var ProgressBarView = function(container, model){

    model.addObserver(this);

    this._container = container;
    this._model = model;

    var _this = this;

    this.presentationBar = this._container.find("#presentationPercentage");
    this.groupworkBar = this._container.find("#groupworkPercentage");
    this.discussionBar = this._container.find("#discussionPercentage");
    this.breakBar = this._container.find("#breakPercentage");

    this.update = function(){

        var time = 0;

        this._container.empty();
        console.log(_this._model.days);

        time = _this._model.days[0].getLengthByType(0)/_this._model.days[0].getLength() * 100;

        var htmlCode = '<div class="progress-bar progress-bar-success" id="discussionPercentage" style="width:'
            + time + '% "><span class="sr-only">25% Complete (discussion)</span></div>';

        this._container.firstChild(htmlCode);
    }
}