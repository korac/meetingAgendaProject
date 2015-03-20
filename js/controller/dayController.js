/**
 * Created by Jonathan, Mar. 6th
 */

var DayController = function (view, model) {


    this._view = view;
    this._model = model;

    var _this = this;
    var _startTime = model._start;
    var _endTime = model._end;
    var totalTime = 0;
    // Drag and drop sortable function
    view.connectedSortable.sortable({
        appendTo: document.body,
        helper: "clone",
        items: ".activityBox:not(.placeholder)",
        connectWith: "div",
        start: function()
        {
            console.log("I am inside DayController");
        },
        update:function(event,ui)
        {
        if (this === ui.item.parent()[0]) 
        {
            if(ui.item.attr('day')!= null)
            {
                //Day Controller moving activity inside day
                model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
                console.log("Day Controller moving activity inside day");
            }
            else
            {  
                //  Day Controller moving activity from parked activities to day
                model.moveActivity(null,parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
                console.log("Day Controller moving activity from parked activities to day");
            }
            
        }
         else
        {

        }
        },
    }).disableSelection();


    //If the start time is changed, smth is updated (debug: console prints the new time)
    $('#dayView').on('change',function() {
        if ($("#startTime").val() != ""){
            _startTime = $("#startTime").val();
            //console.log(_startTime);


            /*Maybe we need code here to change the _endTime. However, there is math in the model already.


            /*Maybe we need code here to change the _endTime. However, there is math in the model alredy.

            We should check that out.*/
        }
    });



};



