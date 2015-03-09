
var DayController = function (view, model) {

/**
 * Created by Jonathan, Mar. 6th
 */
	this._view = view;
    this._model = model;

    var _this = this;
    var _startTime = model._start;



   /** 
	$('#dayView').keyup(function() {
        _startTime($("#startTime").val());
        console.log("input smth");
    });

	        $.widget( "ui.timespinner", $.ui.spinner, {
            options: {
            // seconds
            step: 60 * 1000,
            // hours
            page: 60
        },
        
        _parse: function( value ) {
            if ( typeof value === "string" ) {
            // already a timestamp
            if ( Number( value ) == value ) {
            return Number( value );
            }
        return +Globalize.parseDate( value );
        }
        return value;
        },
        
        _format: function( value ) {
            return Globalize.format( new Date(value), "t" );
            }
        });
        
        $(function() {
            $( "#startTimeSpinner" ).timespinner();
            $( "#culture" ).change(function() {
                var current = $( "#startTimeSpinner" ).timespinner( "value" );
                Globalize.culture( $(this).val() );
                $( "#startTimeSpinner" ).timespinner( "value", current );
            });
        });*/

}