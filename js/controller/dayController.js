/**
 * Created by Jonathan, Mar. 6th
 */

var DayController = function (view, model) {


    this._view = view;
    this._model = model;

    var _this = this;
    var _startTime = model._start;

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
                model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
                //console.log("ekane to move element sto day list");
            }
            else
            {    
                model.moveActivity(null,parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
                //console.log("ekane to move apo to day sto day");
            }
            
        }
         else
        {

        }
        },
    }).disableSelection();



};


   /**
    $('#dayView').keyup(function() {
        _startTime($("#startTime").val());
        console.log("input smth");
    });


    $('#dayView').on('change', function() {
        console.log(val('#startTime'));
        //_startTime($("#startTime").val());
        //console.log("input smth");
    });

    }*/