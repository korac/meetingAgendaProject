/**
 * Created by Jonathan, Mar. 6th
 */

var DayController = function (view, model) {


    this._view = view;
    this._model = model;

    var _this = this;
    var _startTime = model._start;

    $('#startTime').on('change', function() {
        console.log(_startTime.val());
        // _startTime($("#startTime").val());
        //alert("#startTime".val());
    });
    


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